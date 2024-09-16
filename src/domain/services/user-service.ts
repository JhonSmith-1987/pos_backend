import {IUserService} from "../interfaces/services/i-user-service";
import {UserRepository} from "../../infrastructure/repositories/user-repository";
import {RequestCreateUser} from "../models/user-model";
import {IResponseCreateDefault} from "../interfaces/common/i-response-create-default";
import {UserAttributes} from "../entities/user-entity";
import {IPaginateNumber, IPaginateString} from "../interfaces/common/i-paginate";
import {hashPassword} from "../../infrastructure/config/BcryptPassword";
import {generateUserCreateData} from "../../utils/generateUserCreateData";

export class UserService implements IUserService {

    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async create(user: RequestCreateUser): Promise<IResponseCreateDefault<UserAttributes | null>> {
        try {
            const response = await this.userRepository.getByEmail(user.email);
            if (response) {
                return {
                    status: 409,
                    message: 'user already exists',
                    data: null
                }
            }
            const password_hash = await hashPassword(user.password);
            const user_created = generateUserCreateData(user, password_hash);
            await this.userRepository.create(user_created);
            return {
                status: 200,
                message: 'User created successfully',
                data: null
            }
        } catch (error) {
            throw error;
        }
    }

    async getAll(paginate: IPaginateString): Promise<IResponseCreateDefault<UserAttributes[]>> {
        try {
            const paginate_data: IPaginateNumber = {
                limit: parseInt(paginate.size),
                offset: parseInt(paginate.page) * parseInt(paginate.size)
            }
            const users = await this.userRepository.getAll(paginate_data);
            return {
                status: 200,
                message: 'All users',
                data: users
            }
        } catch (error) {
            throw error;
        }
    }
}