import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MovementService from "@/service/MovementService";
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
import { IMovement } from "@/commons/interfaces";

export function MovementListPage() {
  const [data, setData] = useState<IMovement[]>([]);
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    MovementService.findAll()
      .then((response) => {
        setData(response.data);
        setApiError("");
      })
      .catch((error) => {
        setApiError("Falha ao carregar a lista de movimentos.");
      });
  };

  const onEdit = (url: string) => {
    navigate(url);
  };

  const onRemove = (id: number) => {
    MovementService.remove(id)
      .then((response) => {
        loadData();
        setApiError("");
      })
      .catch((error) => {
        setApiError("Falha ao remover o movimento.");
      });
  };

  return (
    <div className="container">
      <h1 className="fs-2 mb-4 text-center">Lista de Movimentos</h1>
      <div className="text-center">
        <Link
          className="btn btn-success btn-icon mb-3"
          to="/movements/new"
          title="Novo Movimento"
          style={{ display: 'inline-block' }}
        >
          <BsPlusCircle  style={{ display: 'inline-block' }} /> Novo Movimento
        </Link>
      </div>
      <TableContainer>
        <Table>
          <TableCaption>Lista de Movimentos</TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th isNumeric>Valor</Th>
              <Th>Data</Th>
              <Th>Categoria</Th>
              <Th>Descrição</Th>
              <Th>Situação</Th>
              <Th>Tipo de Movimento</Th>
              <Th>Conta</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((movement: IMovement) => (
              <Tr
                key={movement.id}
                _hover={{ cursor: "pointer", background: "#eee" }}
              >
                <Td>{movement.id}</Td>
                <Td isNumeric>{movement.valueAmount}</Td>
                <Td>{movement.dateMovement}</Td>
                <Td>{movement.category?.name}</Td>
                <Td>{movement.description}</Td>
                <Td>{movement.situation?.name}</Td>
                <Td>{movement.type?.name}</Td>
                <Td>{movement.account?.bank}</Td>
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
                        onClick={() => onEdit(`/movements/${movement.id}`)}
                      >
                        Editar
                      </MenuItem>
                      <MenuItem
                        icon={<BsTrash />}
                        onClick={() => onRemove(movement.id!)}
                      >
                        Remover
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
            <Th>#</Th>
              <Th isNumeric>Valor</Th>
              <Th>Data</Th>
              <Th>Categoria</Th>
              <Th>Descrição</Th>
              <Th>Situação</Th>
              <Th>Tipo de Movimento</Th>
              <Th>Conta</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      {apiError && <div className="alert alert-danger">{apiError}</div>}
    </div>
  );
}