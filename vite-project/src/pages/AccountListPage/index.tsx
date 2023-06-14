import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountService from "@/service/AccountService";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import {
  BsThreeDotsVertical,
  BsPencilSquare,
  BsTrash,
  BsPlusCircle,
} from "react-icons/bs";
import { IAccount, ITypeAccount } from "@/commons/interfaces";

export function AccountListPage() {
  const [data, setData] = useState<IAccount[]>([]);
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    AccountService.findAll()
      .then((response) => {
        setData(response.data);
        setApiError("");
      })
      .catch((error) => {
        setApiError("Falha ao carregar a lista de contas.");
      });
  };

  const onEdit = (url: string) => {
    navigate(url);
  };

  const onRemove = (id: number) => {
    AccountService.remove(id)
      .then((response) => {
        loadData();
        setApiError("");
      })
      .catch((error) => {
        setApiError("Falha ao remover a conta.");
      });
  };

  return (
    <div className="container">
      <h1 className="fs-2 mb-4 text-center">Lista de Contas</h1>
      <div className="text-center">
        <Link
          className="btn btn-success btn-icon mb-3"
          to="/accounts/new"
          title="Nova Conta"
          style={{ display: 'inline-block' }}
        >
          <BsPlusCircle  style={{ display: 'inline-block' }} /> Nova Conta
        </Link>
      </div>
      <TableContainer>
        <Table>
          <TableCaption>Lista de Contas</TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Nome do Banco</Th>
              <Th isNumeric>Agência</Th>
              <Th isNumeric>Número da Conta</Th>
              <Th>Tipo de Conta</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((account: IAccount) => (
              <Tr
                key={account.id}
                _hover={{ cursor: "pointer", background: "#eee" }}
              >
                <Td>{account.id}</Td>
                <Td>{account.bank}</Td>
                <Td isNumeric>{account.agency}</Td>
                <Td isNumeric>{account.number}</Td>
                <Td>{account.type?.name}</Td>
                <Td>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Actions"
                      icon={<BsThreeDotsVertical size={20} />}
                      variant="ghost"
                    />
                    <MenuList>
                      <MenuItem
                        icon={<BsPencilSquare />}
                        onClick={() => onEdit(`/accounts/${account.id}`)}
                      >
                        Editar
                      </MenuItem>
                      <MenuItem
                        icon={<BsTrash />}
                        onClick={() => onRemove(account.id!)}
                      >
                        Remover
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {apiError && <div className="alert alert-danger">{apiError}</div>}
    </div>
  );
}