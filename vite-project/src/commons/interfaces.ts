export interface IUserSignup {
    username: string;
    cellphone: string;
    email: string;
    password: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface ICategory {
    id?: number;
    name: string;
}

export interface IProduct {
    id?: number;
    name: string;
    description: string;
    price: number;
    category: ICategory; //igual fazemos no backend (java)
}