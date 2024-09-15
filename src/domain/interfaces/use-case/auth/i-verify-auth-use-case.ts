import {AuthRequestModel, IResponseAuthLogin} from "../../../models/auth-model";
import {UserAttributes} from "../../../entities/user-entity";

export interface IVerifyAuthUseCase {
    execute(auth: AuthRequestModel): Promise<IResponseAuthLogin<string|null, UserAttributes|null>>;
}