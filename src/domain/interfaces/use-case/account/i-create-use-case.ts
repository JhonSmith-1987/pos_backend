import {RequestCreateAccountModel} from "../../../models/account-model";
import {IResponseCreateDefault} from "../../common/i-response-create-default";
import {AccountAttributes} from "../../../entities/account-entity";

export interface ICreateUseCase {
    execute(account: RequestCreateAccountModel): Promise<IResponseCreateDefault<AccountAttributes|null>>;
}