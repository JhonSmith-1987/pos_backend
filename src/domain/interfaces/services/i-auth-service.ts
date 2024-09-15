import {AuthRequestModel, IResponseAuthLogin} from "../../models/auth-model";
import {UserAttributes} from "../../entities/user-entity";

export interface IAuthService {
    verifyAuth(auth: AuthRequestModel): Promise<IResponseAuthLogin<string|null, UserAttributes|null>>;
}