import {IResponseCreateDefault} from "../../common/i-response-create-default";
import {AccountAttributes} from "../../../entities/account-entity";

export interface IGetAllUseCase {
    execute(): Promise<IResponseCreateDefault<AccountAttributes[]>>;
}