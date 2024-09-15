import {UserAttributes, UserCreationAttributes} from "../../entities/user-entity";

export interface IUserRepository {
    create(user: UserCreationAttributes): Promise<UserAttributes>;
    getById(id: string): Promise<UserAttributes|null>;
    getByEmail(email: string): Promise<UserAttributes|null>;
    getAll(): Promise<UserAttributes[]>;
}