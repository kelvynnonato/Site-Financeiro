import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Select,
  Button,
} from "@chakra-ui/react";
import MovementService from "@/service/MovementService";
import SituationService from "@/service/SituationService";
import TypeMovementService from "@/service/TypeMovementService";
import { IAccount, ICategory, IMovement, ISituation, ITypeAccount, ITypeMovement } from "@/commons/interfaces";
import AccountService from "@/service/AccountService";
import CategoryService from "@/service/CategoryService";

export function MovementFormPage() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IMovement>();
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [situations, setSituations] = useState<ISituation[]>([]);
  const [typeMovements, setTypeMovements] = useState<ITypeAccount[]>([]);
  const [entity, setEntity] = useState<IMovement>({
    id: undefined,
    valueAmount: 0,
    dateMovement: "",
    category: { id: undefined, name: ""},
    description: "",
    situation: { id: undefined, name: ""},
    type: { id: undefined, name: "" },
    account: { id: undefined, bank: "", number: 0, agency: 0, type: {id: undefined, name: ""} },
  });

  // Executa ao carregar o componente
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    // Busca a lista de categorias
    await AccountService.findAll()
      .then((response) => {
        // caso sucesso, adiciona a lista no state
        setAccounts(response.data);
        setApiError("");
      })
      .catch((erro) => {
        setApiError("Falha ao carregar a combo de Contas.");
      });
    await CategoryService.findAll()
      .then((response) => {
        // caso sucesso, adiciona a lista no state
        setCategories(response.data);
        setApiError("");
      })
      .catch((erro) => {
        setApiError("Falha ao carregar a combo de Categorias.");
      });
    await SituationService.findAll()
      .then((response) => {
        setSituations(response.data);
        setApiError("");
      })
      .catch((erro) => {
        setApiError("Falha ao carregar a combo de Situações.");
      });
    await TypeMovementService.findAll()
      .then((response) => {
        setTypeMovements(response.data);
        setApiError("");
      })
      .catch((erro) => {
        setApiError("Falha ao carregar a combo de Tipos de Movimentação.");
      });
    if (id) {
      MovementService.findOne(parseInt(id))
        .then((response) => {
          if (response.data) {
            console.log(response.data);
            setEntity({
              id: response.data.id,
              valueAmount: response.data.valueAmount,
              dateMovement: response.data.dateMovement,
              category: {id: response.data.category. id, name:""},
              description: response.data.description,
              situation: { id: response.data.situation.id, name: "" },
              type: { id: response.data.type.id, name: "" },
              account: { id: response.data.account.id, bank: "", number: 0, agency: 0, type: {id: response.data.type.id, name: "",}},
            });
            setApiError("");
          } else {
            setApiError("Falha ao carregar o movimento.");
          }
        })
        .catch((error) => {
          setApiError("Falha ao carregar o movimento.");
        });
    } else {
      setEntity((previousEntity) => {
        return {
          ...previousEntity,
          category: {id: 1, name: ""},
          situation: { id: 1, name: "" },
          type: { id: 1, name: "" },
          account: { id: 1, bank: "", agency: 0, number: 0, type:{id: 1, name: ""} },
        };
      });
    }
  };

  useEffect(() => {
    reset(entity);
  }, [entity, reset]);

  const onSubmit = (data: IMovement) => {
    const movement: IMovement = {
      ...data,
      id: entity.id,
      situation: { id: data.situation.id, name: "" },
      type: { id: data.type.id, name: "" },
      account: { id: data.account.id, bank: "", agency: 0, number: 0, type: {id: data.type.id, name:""} },
    };
    MovementService.save(movement)
      .then((response) => {
        navigate("/movements");
      })
      .catch((error) => {
        setApiError("Falha ao salvar o movimento.");
      });
  };

  return (
    <div className="container">
      <h1 className="fs-2 text-center">Cadastro de Movimentos</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.valueAmount && true}>
          <FormLabel htmlFor="valueAmount">Valor do Movimento</FormLabel>
          <Input
            id="valueAmount"
            placeholder="0.0"
            {...register("valueAmount", {
              required: "O campo do valor é obrigatório",
              min: { value: 0.01, message: "O valor deve ser maior que zero" },
            })}
            type="number"
            step="any"
          />
          <FormErrorMessage>
            {errors.valueAmount && errors.valueAmount.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.dateMovement && true}>
          <FormLabel htmlFor="dateMovement">Preço</FormLabel>
          <Input
            id="dateMovement"
            placeholder="10/10/1010"
            {...register("dateMovement", {
              required: "O campo data é obrigatório",
            })}
          />
          <FormErrorMessage>
            {errors.dateMovement && errors.dateMovement.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.category && true}>
          <FormLabel htmlFor="category">Categoria</FormLabel>

          <Select
            id="category"
            {...register("category.id", {
              required: "O campo categoria é obrigatório",
            })}
            size="sm"
          >
            {categories.map((category: ICategory) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>

          <FormErrorMessage>
            {errors.situation && errors.situation.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.description && true}>
          <FormLabel htmlFor="description">Descrição</FormLabel>
          <Textarea
            id="description"
            placeholder="Descrição do movimento"
            {...register("description", {
              required: "O campo descrição é obrigatório",
              minLength: {
                value: 2,
                message: "O tamanho deve ser entre 2 e 1024 caracteres",
              },
              maxLength: {
                value: 1024,
                message: "O tamanho deve ser entre 2 e 1024 caracteres",
              },
            })}
            size="sm"
          />
          <FormErrorMessage>
            {errors.description && errors.description.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.situation && true}>
          <FormLabel htmlFor="situation">Situação</FormLabel>

          <Select
            id="situation"
            {...register("situation.id", {
              required: "O campo situação é obrigatório",
            })}
            size="sm"
          >
            {situations.map((situation: ISituation) => (
              <option key={situation.id} value={situation.id}>
                {situation.name}
              </option>
            ))}
          </Select>

          <FormErrorMessage>
            {errors.situation && errors.situation.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.type && true}>
          <FormLabel htmlFor="type">Tipo de Movimento</FormLabel>

          <Select
            id="type"
            {...register("type.id", {
              required: "O campo tipo de movimento é obrigatório",
            })}
            size="sm"
          >
            {typeMovements.map((type: ITypeMovement) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </Select>

          <FormErrorMessage>
            {errors.type && errors.type.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.account && true}>
          <FormLabel htmlFor="account">Conta</FormLabel>

          <Select
            id="account"
            {...register("account.id", {
              required: "O campo conta é obrigatório",
            })}
            size="sm"
          >
            {accounts.map((account: IAccount) => (
              <option key={account.id} value={account.id}>
                {account.bank}
              </option>
            ))}
          </Select>

          <FormErrorMessage>
            {errors.type && errors.type.message}
          </FormErrorMessage>
        </FormControl>

        <div className="text-center">
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Salvar
          </Button>
        </div>
      </form>
      {apiError && <div className="alert alert-danger">{apiError}</div>}
      <div className="text-center">
        <Link to="/movements">Voltar</Link>
      </div>
    </div>
  );
}