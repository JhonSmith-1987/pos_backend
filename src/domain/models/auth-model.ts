export interface AuthRequestModel {
    email: string;
    password: string;
}

export interface generateTokenAuthModel {
    id: string;
    name: string;
    email: string;
}

export interface IResponseAuthLogin<data> {
    status: number;
    message: string;
    token: string|null;
    data: data
}

export interface IAuthData {
    id: string;
    name: string;
    email: string;
    status: string;
    user_type: string;
    account_id: string;
}