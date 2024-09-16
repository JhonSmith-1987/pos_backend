import {UserAttributes, UserCreationAttributes} from "../../entities/user-entity";
import {IPaginateNumber} from "../common/i-paginate";

export interface IUserRepository {
    create(user: UserCreationAttributes): Promise<UserAttributes>;
    getById(id: string): Promise<UserAttributes|null>;
    getByEmail(email: string): Promise<UserAttributes|null>;
    getAll(paginate: IPaginateNumber): Promise<UserAttributes[]>;
}