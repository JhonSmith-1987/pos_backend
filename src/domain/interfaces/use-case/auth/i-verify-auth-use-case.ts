import {AuthRequestModel, IAuthData, IResponseAuthLogin} from "../../../models/auth-model";

export interface IVerifyAuthUseCase {
    execute(auth: AuthRequestModel): Promise<IResponseAuthLogin<IAuthData|null>>;
}