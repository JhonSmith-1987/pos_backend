import {IVerifyAuthUseCase} from "../../interfaces/use-case/auth/i-verify-auth-use-case";
import {AuthService} from "../../services/auth-service";
import {AuthRequestModel, IResponseAuthLogin} from "../../models/auth-model";
import {UserAttributes} from "../../entities/user-entity";

export class VerifyAuth implements IVerifyAuthUseCase {

    private authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    async execute(auth: AuthRequestModel): Promise<IResponseAuthLogin<string|null, UserAttributes|null>> {
        return await this.authService.verifyAuth(auth);
    }
}