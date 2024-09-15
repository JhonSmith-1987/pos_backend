import {AuthRequestModel, IAuthData, IResponseAuthLogin} from "../../models/auth-model";

export interface IAuthService {
    login(auth: AuthRequestModel): Promise<IResponseAuthLogin<IAuthData|null>>;
}