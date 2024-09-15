export interface AuthRequestModel {
    email: string;
    password: string;
}

export interface generateTokenAuthModel {
    id: string;
    name: string;
    email: string;
}

export interface IResponseAuthLogin<token, data> {
    status: number;
    message: string;
    token: token;
    data: data
}