import { ISituation } from "@/commons/interfaces";
import { api } from "@/lib/axios"

const findAll = () => {
    return api.get('/situations');
};

const save = (situation: ISituation) => {
    return api.post("/situations", situation);
};

const remove = (id: number) => {
    return api.delete(`/situations/${id}`);
};

const findOne = (id: number) => {
    return api.get(`/situations/${id}`);
};

const SituationService = {
    findAll,
    save,
    remove,
    findOne,
};

export default SituationService;