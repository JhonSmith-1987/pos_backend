import {IVerifyAuthUseCase} from "../../interfaces/use-case/auth/i-verify-auth-use-case";
import {AuthService} from "../../services/auth-service";
import {AuthRequestModel, IAuthData, IResponseAuthLogin} from "../../models/auth-model";

export class VerifyAuthUseCase implements IVerifyAuthUseCase {

    private authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    async execute(auth: AuthRequestModel): Promise<IResponseAuthLogin<IAuthData | null>> {
        return await this.authService.login(auth);
    }
}