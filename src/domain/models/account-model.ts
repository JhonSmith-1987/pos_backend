import {AccountAttributes} from "../entities/account-entity";
import {UserAttributes} from "../entities/user-entity";

export interface RequestCreateAccountModel {
    business_name: string;
    business_address: string;
    business_phone: string;
    business_email: string;
    subscription_plan: string;
    account_status: string;
    image_logo: string;
}

export interface ResponseCreateAccountModel {
    account: AccountAttributes,
    user: UserAttributes
}

export interface QueryId {
    id: string;
}
