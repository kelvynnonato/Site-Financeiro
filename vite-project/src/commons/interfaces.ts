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
    type: ITypeAccount;
    balance: number;
}

export interface ITypeAccount{
    id?: number;
    name: string;
}

export interface IMovement {
    id?: number;
    valueAmount: number;
    dateMovement: string;
    category: ICategory;
    description: string;
    situation: ISituation;
    type: ITypeMovement;
    account: IAccount;
    accountD?: IAccount; //igual fazemos no backend (java)
}

export interface ICategory{
    id?: number;
    name: string;
}

export interface ISituation{
    id?: number;
    name: string;
}

export interface ITypeMovement{
    id?: number;
    name: string;
}