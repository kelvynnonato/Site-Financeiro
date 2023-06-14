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
import { IAccount, ITypeAccount } from "@/commons/interfaces";
import TypeAccountService from "@/service/TypeAccountService";
import AccountService from "@/service/AccountService";

export function AccountFormPage() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IAccount>();
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [typeAccounts, setTypeAccounts] = useState<ITypeAccount[]>([]);
  const [entity, setEntity] = useState<IAccount>({
    id: undefined,
    number: 0,
    agency: 0,
    bank: "",
    type: { id: undefined, name: "" }
  });

  // Executa ao carregar o componente
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    // Busca a lista de categorias
    await TypeAccountService.findAll()
      .then((response) => {
        // caso sucesso, adiciona a lista no state
        setTypeAccounts(response.data);
        setApiError("");
      })
      .catch((erro) => {
        setApiError("Falha ao carregar a combo de Tipos de Contas.");
      });
    if (id) {
      // ao editar um produto, busca ele no back-end e carrega no objeto form que está no state.
      AccountService.findOne(parseInt(id))
        .then((response) => {
          if (response.data) {
            console.log(response.data);
            setEntity({
              id: response.data.id,
              number: response.data.number,
              agency: response.data.agency,
              bank: response.data.bank,
              type: { id: response.data.type.id, name: "" },
            });
            setApiError("");
          } else {
            setApiError("Falha ao carregar a conta.");
          }
        })
        .catch((error) => {
          setApiError("Falha ao carregar a conta.");
        });
    } else {
      // ao cadastrar um novo produto, valoriza no objeto form a primeira categoria do select
      if (typeAccounts) {
        setEntity((previousEntity) => {
          return {
            ...previousEntity,
            // type: { id: typeAccounts[0].id, name: "" },
            type: { id: 1, name: "" },
          };
        });
      }
    }
  };

  useEffect(() => {
    reset(entity);
  }, [entity, reset]);

  const onSubmit = (data: IAccount) => {
    const account: IAccount = {
      ...data,
      id: entity.id,
      type: { id: data.type.id, name: "" },
    };
    AccountService.save(account)
      .then((response) => {
        navigate("/accounts");
      })
      .catch((error) => {
        setApiError("Falha ao salvar o produto.");
      });
  };

  return (
    <div className="container">
      <h1 className="fs-2 text-center">Cadastro de Conta</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.bank && true}>
          <FormLabel htmlFor="name">Nome do Banco</FormLabel>
          <Input
            id="name"
            placeholder="Nome do Banco"
            {...register("bank", {
              required: "O campo nome é obrigatório",
            })}
          />
          <FormErrorMessage>
            {errors.bank && errors.bank.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.number && true}>
          <FormLabel htmlFor="price">Numero da Conta</FormLabel>
          <Input
            id="price"
            placeholder="0"
            {...register("number", {
              required: "O campo Numero da Conta é obrigatório",
            })}
            type="number"
            step="any"
          />

          <FormErrorMessage>
            {errors.number && errors.number.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.agency && true}>
          <FormLabel htmlFor="agency">Agência</FormLabel>
          <Input
            id="agency"
            placeholder="0"
            {...register("agency", {
              required: "O campo descrição é obrigatório",
            })}
            type="number"
            step="any"
          />
          <FormErrorMessage>
            {errors.agency && errors.agency.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.type && true}>
          <FormLabel htmlFor="typeAccount">Tipo de Conta</FormLabel>

          <Select
            id="type"
            {...register("type.id", {
              required: "O campo tipo é obrigatório",
            })}
            size="sm"
          >
            {typeAccounts.map((type: ITypeAccount) => (
              <option key={type.id} value={type.id}>
                {type.name}
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
        <Link to="/accounts">Voltar</Link>
      </div>
    </div>
  );
}