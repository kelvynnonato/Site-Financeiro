import { ITypeAccount } from "@/commons/interfaces";
import { api } from "@/lib/axios"

const findAll = () => {
    return api.get('/typeaccounts');
};

const save = (typeAccount: ITypeAccount) => {
    return api.post("/typeaccounts", typeAccount);
};

const remove = (id: number) => {
    return api.delete(`/typeaccounts/${id}`);
};

const findOne = (id: number) => {
    return api.get(`/typeaccounts/${id}`);
};

const CategoryService = {
    findAll,
    save,
    remove,
    findOne,
};

export default CategoryService;