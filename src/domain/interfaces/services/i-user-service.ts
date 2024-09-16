import {UserAttributes} from "../../entities/user-entity";
import {RequestCreateUser} from "../../models/user-model";
import {IResponseCreateDefault} from "../common/i-response-create-default";
import {IPaginateString} from "../common/i-paginate";

export interface IUserService {
    create(user: RequestCreateUser): Promise<IResponseCreateDefault<UserAttributes|null>>;
    getAll(paginate: IPaginateString): Promise<IResponseCreateDefault<UserAttributes[]>>;
}