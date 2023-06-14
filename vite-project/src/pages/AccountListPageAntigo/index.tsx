import { IAccount } from "@/commons/interfaces";
import AccountService from "@/service/AccountService";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function AccountListPageAntigo(){
    const [data, setData] = useState([]);
    
    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        AccountService.findAll()
        .then((response) => {
            setData(response.data);
            console.log(response.data);
        })
        .catch((error) => {});
    }
    const onRemove = (id: number) => {
        AccountService.remove(id)
        .then((response) => {
            loadData();
        })
        .catch((responseError) => {})
        .finally(() => {});
    };

    return(
        <>
            <div className="container">
                <h1 className="text-center">Account List PAGE</h1>
                <Link to="/accounts/new" className="btn btn-success">
                    Nova Conta
                </Link>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>#ID</td>
                            <td>Banco</td>
                            <td>Numero</td>
                            <td>Agencia</td>
                            <td>Tipo de Conta</td>
                            <td>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((account: IAccount) => (
                            <tr>
                                <td>{account.id}</td>
                                <td>{account.bank}</td>
                                <td>{account.number}</td>
                                <td>{account.agency}</td>
                                <td>{account.type.name}</td>
                                <td>
                                    <Link to={`/accounts/${account.id}`}
                                    className="btn btn-primary"
                                    >
                                      Editar
                                    </Link>
                                    <button className="btn btn-danger"
                                     onClick={() => onRemove(account.id ? account.id : 0)}
                                     >
                                    Remover
                                     </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}