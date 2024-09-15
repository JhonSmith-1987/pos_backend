import {AccountAttributes} from "../../entities/account-entity";
import {RequestCreateAccountModel} from "../../models/account-model";
import {IResponseCreateDefault} from "../common/i-response-create-default";


export interface IAccountService {
    create(account: RequestCreateAccountModel): Promise<IResponseCreateDefault<AccountAttributes|null>>;
    getById(id: string): Promise<IResponseCreateDefault<AccountAttributes|null>>;
    getAll(): Promise<IResponseCreateDefault<AccountAttributes[]>>;
}