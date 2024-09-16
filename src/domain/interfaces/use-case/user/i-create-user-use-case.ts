import {RequestCreateUser} from "../../../models/user-model";
import {IResponseCreateDefault} from "../../common/i-response-create-default";
import {UserAttributes} from "../../../entities/user-entity";

export interface ICreateUserUseCase {
    execute(user: RequestCreateUser): Promise<IResponseCreateDefault<UserAttributes|null>>;
}