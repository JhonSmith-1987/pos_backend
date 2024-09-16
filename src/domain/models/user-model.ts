export interface RequestCreateUser {
    name: string;
    email: string;
    password: string;
    status: string;
    user_type: string;
    create_date: number;
    account_id: string;
}