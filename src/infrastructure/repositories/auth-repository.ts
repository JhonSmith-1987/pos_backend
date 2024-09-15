import {IAuthRepository} from "../../domain/interfaces/repositories/i-auth-repository";
import UserEntity, {UserAttributes} from "../../domain/entities/user-entity";

export class AuthRepository implements IAuthRepository {

    constructor() {
    }

    async getUserByEmail(email: string): Promise<UserAttributes | null> {
        try {
            return await UserEntity.findOne({
                where: {
                    email: email
                },
                attributes: {exclude: ['createdAt', 'updatedAt']}
            })
        } catch (error) {
            throw error;
        }
    }
}