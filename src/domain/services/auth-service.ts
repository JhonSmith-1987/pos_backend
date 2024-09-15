import {IAuthService} from "../interfaces/services/i-auth-service";
import {AuthRepository} from "../../infrastructure/repositories/auth-repository";
import {AuthRequestModel, generateTokenAuthModel, IResponseAuthLogin} from "../models/auth-model";
import {comparePassword} from "../../infrastructure/config/BcryptPassword";
import {generateTokenAuth} from "../../infrastructure/config/jsonwebtoken";
import {UserAttributes} from "../entities/user-entity";

export class AuthService implements IAuthService {

    private authRepository: AuthRepository;

    constructor(authRepository: AuthRepository) {
        this.authRepository = authRepository;
    }

    async verifyAuth(auth: AuthRequestModel): Promise<IResponseAuthLogin<string|null, UserAttributes|null>> {
        try {
            const user = await this.authRepository.getUserByEmail(auth.email);
            if (!user) {
                return {
                    status: 404,
                    message: 'User not found',
                    token: null,
                    data: null
                } as IResponseAuthLogin<string|null, UserAttributes|null>
            }
            if (user.status !== 'active') {
                return {
                    status: 404,
                    message: 'User not found',
                    token: null,
                    data: null
                } as IResponseAuthLogin<string|null, UserAttributes|null>
            }
            const verifyPass = await comparePassword(auth.password, user.password);
            if (!verifyPass) {
                return {
                    status: 401,
                    message: 'Incorrect password',
                    token: null,
                    data: null
                } as IResponseAuthLogin<string|null, UserAttributes|null>
            }
            const payload_token:generateTokenAuthModel = {
                id: user.id,
                email: user.email,
                name: user.name
            }
            const token = generateTokenAuth(payload_token);
            return {
                status: 200,
                message: 'Login successful',
                token: token,
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    status: user.status,
                    user_type: user.user_type,
                    creat_date: user.creat_date,
                    account_id: user.account_id,
                }
            } as IResponseAuthLogin<string|null, UserAttributes|null>;
        } catch (error) {
            throw error;
        }
    }
}