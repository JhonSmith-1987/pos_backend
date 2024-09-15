import {ICreateUseCase} from "../../interfaces/use-case/account/i-create-use-case";
import {AccountService} from "../../services/account-service";
import {RequestCreateAccountModel} from "../../models/account-model";
import {IResponseCreateDefault} from "../../interfaces/common/i-response-create-default";
import {AccountAttributes} from "../../entities/account-entity";

export class CreateAccountUseCase implements ICreateUseCase {

    private accountService: AccountService;

    constructor(accountService: AccountService) {
        this.accountService = accountService;
    }

    async execute(account: RequestCreateAccountModel): Promise<IResponseCreateDefault<AccountAttributes | null>> {
        return await this.accountService.create(account);
    }
}