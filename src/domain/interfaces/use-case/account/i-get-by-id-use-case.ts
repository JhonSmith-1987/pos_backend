import {IResponseCreateDefault} from "../../common/i-response-create-default";
import {AccountAttributes} from "../../../entities/account-entity";

export interface IGetByIdUseCase {
    execute(id: string): Promise<IResponseCreateDefault<AccountAttributes|null>>;
}