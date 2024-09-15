import {IAuthService} from "../interfaces/services/i-auth-service";
import {AuthRequestModel, generateTokenAuthModel, IAuthData, IResponseAuthLogin} from "../models/auth-model";
import {comparePassword} from "../../infrastructure/config/BcryptPassword";
import {generateTokenAuth} from "../../infrastructure/config/jsonwebtoken";
import {UserRepository} from "../../infrastructure/repositories/user-repository";

export class AuthService implements IAuthService {

    private userRepository:UserRepository;

    constructor(userRepository:UserRepository) {
        this.userRepository = userRepository;
    }

    async login(auth: AuthRequestModel): Promise<IResponseAuthLogin<IAuthData|null>> {
        try {
            const verify_user = await this.userRepository.getByEmail(auth.email);
            if (!verify_user) {
                return {
                    status: 404,
                    message: 'User not found',
                    data: null,
                    token: null
                }
            }
            const verifyPass = await comparePassword(auth.password, verify_user.password);
            if (!verifyPass) {
                return {
                    status: 401,
                    message: 'incorrect password',
                    data: null,
                    token: null
                }
            }
            const auth_data: IAuthData = {
                id: verify_user.id,
                status: verify_user.status,
                email: verify_user.email,
                name: verify_user.name,
                account_id: verify_user.account_id,
                user_type: verify_user.user_type
            }
            const token_data: generateTokenAuthModel = {
                id: verify_user.id,
                name: verify_user.name,
                email: verify_user.email
            }
            const token: string = generateTokenAuth(token_data);
            return {
                status: 200,
                message: 'verify login successfully',
                token: token,
                data: auth_data
            }
        } catch (error) {
            throw error;
        }
    }
}