import { ITypeMovement } from "@/commons/interfaces";
import { api } from "@/lib/axios"

const findAll = () => {
    return api.get('/typemovements');
};

const save = (typeMovement: ITypeMovement) => {
    return api.post("/typemovements", typeMovement);
};

const remove = (id: number) => {
    return api.delete(`/typemovements/${id}`);
};

const findOne = (id: number) => {
    return api.get(`/typemovements/${id}`);
};

const TypeMovementService = {
    findAll,
    save,
    remove,
    findOne,
};

export default TypeMovementService;