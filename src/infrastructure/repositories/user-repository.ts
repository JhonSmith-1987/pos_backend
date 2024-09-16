import {IUserRepository} from "../../domain/interfaces/repositories/i-user-repository";
import UserEntity, {UserAttributes, UserCreationAttributes} from "../../domain/entities/user-entity";
import {IPaginateNumber} from "../../domain/interfaces/common/i-paginate";

export class UserRepository implements IUserRepository {

    constructor() {
    }

    async create(user: UserCreationAttributes): Promise<UserAttributes> {
        try {
            const new_user = await UserEntity.create(user);
            return {
                id: new_user.dataValues.id,
                email: new_user.dataValues.email,
                status: new_user.dataValues.status,
                user_type: new_user.dataValues.user_type,
                create_date: new_user.dataValues.create_date,
                account_id: new_user.dataValues.account_id,
                name: new_user.dataValues.name,
                password: new_user.dataValues.password,
                image: new_user.dataValues.image
            }
        } catch (error) {
            console.error('************ error al crear usuer ************');
            console.error(error);
            throw error;
        }
    }

    async getById(id: string): Promise<UserAttributes | null> {
        try {
            const user = await UserEntity.findByPk(id, {
                attributes: { exclude: ['createdAt', 'updatedAt'] },
            })
            if (!user) {
                return null;
            }
            return user;
        } catch (error) {
            console.error('************ error al obtener el usuario por id ************');
            console.error(error);
            throw error;
        }
    }

    async getByEmail(email: string): Promise<UserAttributes | null> {
        try {
            const user = await UserEntity.findOne({
                where: {
                    email: email,
                },
                attributes: { exclude: ['createdAt', 'updatedAt'] },
            });
            if (!user) {
                return null;
            }
            return user;
        } catch (error) {
            console.error('************ error al obtener el usuario por email ************');
            console.error(error);
            throw error;
        }
    }

    async getAll(paginate: IPaginateNumber): Promise<UserAttributes[]> {
        try {
            const users = await UserEntity.findAll({
                offset: paginate.offset,
                limit: paginate.limit,
                attributes: {exclude: ['createdAtt', 'updatedAt']},
                order: [['create_date', 'ASC']],
            });
            if (!users) {
                return [];
            }
            const users_data: UserAttributes[] = [];
            for (const data of users) {
                users_data.push({
                    ...data.dataValues,
                });
            }
            return users_data;
        } catch (error) {
            console.error('************ error al obtener el usuario por email ************');
            console.error(error);
            throw error;
        }
    }
}