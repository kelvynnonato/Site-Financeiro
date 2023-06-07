import { IAccount, ITypeAccount } from "@/commons/interfaces";
import { ButtonWithProgress } from "@/components/ButtonWithProgress";
import { Input } from "@/components/Input";
import AccountService from "@/service/AccountService";
import TypeAccountService from "@/service/TypeAccountService";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export function AccountFormPage() {
    const [form, setForm] = useState<IAccount>({
        id: undefined,
        number: 0,
        agency: 0,
        bank: "",
        type: { id: undefined, name: "" }
    });
    const [errors, setErrors] = useState({
       id: undefined,
       number: '',
       agency: '',
       bank: '',
       type: ''
    });
    const [pendingApiCall, setPendingApiCall] = useState(false);
    const [apiError, setApiError] = useState("");
    const [typeAccounts, setTypeAccounts] = useState<ITypeAccount[]>([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
      loadData();
    }, []);
  
    const loadData = async () => {
      await TypeAccountService.findAll()
      .then((response)=> {
          setTypeAccounts(response.data);
          setApiError("");
      })
      .catch((responseError) => {
          setApiError("Falha ao carregar a lista de categorias");
      });
  
      if (id) {
          AccountService.findOne( parseInt(id) ).then((response) => {
              if (response.data) {
                  setForm({ ...response.data });
              }
              setApiError("");
          })
          .catch((responseError) => {
              setApiError("Falha ao carregar o produto");
          })
      } else {
          setForm((previousForm) => {
              return {
              ...previousForm,
              type: { id:typeAccounts[0].id, name: ""},
              };
          });
      }
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setForm((previousForm) => {
          return {
            ...previousForm,
            [name]: value,
          };
        });
    
        setErrors((previousErrors) => {
          return {
            ...previousErrors,
            [name]: undefined,
          };
        });
    };

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
      const { value, name } = event.target;
      setForm((previousForm) => {
        return {
          ...previousForm,
          [name]: { id: value },
        };
      });
      setErrors((previousErrors) => {
        return {
          ...previousErrors,
          [name]: undefined,
        };
      });
    };

    const onSubmit = () => {
      setPendingApiCall(true);
      const account : IAccount = {
        id: form.id,
        number: form.number,
        agency: form.agency,
        type: form.type,
        bank: form.bank,
      };

      AccountService.save(account)
      .then((response) => {
        navigate("/accounts");
      })
      .catch((error) => {
        if (error.response.data && error.response.data.validationErrors) {
          setErrors(error.response.data.validationErrors);
        }
        setApiError("Falha ao salvar o produto.");
        setPendingApiCall(false);
      });
    };
    
    return (
        <div className="container">
            <h1 className="text-center">Cadastro de Conta</h1>
            <div className="col-12 mb-3">
                <Input
                    className="form-control"
                    name="bank"
                    type="text"
                    placeholder="Informe o nome do Banco"
                    label="Informe o nome do Banco"
                    value={form.bank}
                    hasError={errors.bank ? true : false}
                    error={errors.bank}
                    onChange={onChange}
                />
                <Input
                    className="form-control"
                    name="number"
                    type="number"
                    placeholder="Informe o numero da conta"
                    label="Informe o numero da conta"
                    value={form.number.toString()}
                    hasError={errors.number ? true : false}
                    error={errors.number}
                    onChange={onChange}
                />
                <Input
                    className="form-control"
                    name="agency"
                    type="number"
                    placeholder="Informe o numero da agencia"
                    label="Informe o numero da agencia"
                    value={form.agency.toString()}
                    hasError={errors.agency ? true : false}
                    error={errors.agency}
                    onChange={onChange}
                />
                <div className="col-12 mb-3">
                  <label>Tipo de Conta</label>

                  <select 
                  className="form-control"
                  name="typeAcocunt"
                  value={form.type.id}
                  onChange={onChangeSelect}
                  >
                      {/* Mostra a lista de option do select de acordo com a lista de categorias vinda do server */}
                      {typeAccounts.map((type: ITypeAccount) => (
                        <option key={type.id} value={type.id}>
                          {type.name}
                        </option>
                     ))
                     }
                 </select>

                  {errors.type && (
                  <div className="invalid-feedback d-block">{errors.type}</div>
                  )}
                </div>
                {apiError && <div className="alert alert-danger">{apiError}</div>}
                <div className="text-center">
                  <ButtonWithProgress
                    className="btn btn-primary"
                    onClick={onSubmit}
                    disabled={pendingApiCall ? true : false}
                    pendingApiCall={pendingApiCall}
                    text = "Salvar"
                    />
                </div>
                <div className="text-center mb-3">
                  <Link to="/accounts" className="btn btn-outline-secondary">
                    Voltar
                  </Link>
                </div>
            </div>
        </div>
    )
}