import {UserAttributes} from "../../entities/user-entity";

export interface IAuthRepository {
    getUserByEmail(email:string): Promise<UserAttributes | null>
}