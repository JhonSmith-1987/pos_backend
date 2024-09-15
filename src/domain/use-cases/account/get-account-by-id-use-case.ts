import {AccountService} from "../../services/account-service";
import {IResponseCreateDefault} from "../../interfaces/common/i-response-create-default";
import {AccountAttributes} from "../../entities/account-entity";
import {IGetByIdUseCase} from "../../interfaces/use-case/account/i-get-by-id-use-case";

export class GetAccountByIdUseCase implements IGetByIdUseCase {

    private accountService: AccountService;

    constructor(accountService: AccountService) {
        this.accountService = accountService;
    }

    async execute(id: string): Promise<IResponseCreateDefault<AccountAttributes | null>> {
        return await this.accountService.getById(id);
    }
}