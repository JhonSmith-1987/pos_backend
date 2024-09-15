import {AccountService} from "../../services/account-service";
import {IResponseCreateDefault} from "../../interfaces/common/i-response-create-default";
import {AccountAttributes} from "../../entities/account-entity";
import {IGetAllUseCase} from "../../interfaces/use-case/account/i-get-all-use-case";

export class GetAllAccountsUseCase implements IGetAllUseCase {

    private accountService: AccountService;

    constructor(accountService: AccountService) {
        this.accountService = accountService;
    }

    async execute(): Promise<IResponseCreateDefault<AccountAttributes[]>> {
        return await this.accountService.getAll();
    }
}