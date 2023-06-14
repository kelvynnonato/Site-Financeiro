import { IMovement } from "@/commons/interfaces";
import { api } from "@/lib/axios"

const findAll = () => {
    return api.get('/movements');
};

const save = (movement: IMovement) => {
    return api.post("/movements", movement);
};

const remove = (id: number) => {
    return api.delete(`/movements/${id}`);
};

const findOne = (id: number) => {
    return api.get(`/movements/${id}`);
};

const MovementService = {
    findAll,
    save,
    remove,
    findOne,
};

export default MovementService;