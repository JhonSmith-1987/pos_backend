import {IResponseCreateDefault} from "../../common/i-response-create-default";
import {UserAttributes} from "../../../entities/user-entity";
import {IPaginateString} from "../../common/i-paginate";

export interface IGetAllUsersUseCase {
    execute(paginate: IPaginateString): Promise<IResponseCreateDefault<UserAttributes[]>>;
}