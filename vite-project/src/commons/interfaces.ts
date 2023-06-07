export interface IUserSignup {
    username: string;
    displayName: string;
    cellphone: string;
    email: string;
    password: string;
}

export interface IUserLogin {
    username: string;
    password: string;
}

export interface IAccount {
    id?: number;
    number: number;
    agency: number;
    bank: string;
    type: ITypeAccount
}

export interface ITypeAccount{
    id?: number;
    name: string;
}

export interface IProduct {
    id?: number;
    name: string;
    description: string;
    price: number;
    account: IAccount; //igual fazemos no backend (java)
}