import {IAccountService} from "../interfaces/services/i-account-service";
import {AccountRepository} from "../../infrastructure/repositories/account-repository";
import {RequestCreateAccountModel} from "../models/account-model";
import {IResponseCreateDefault} from "../interfaces/common/i-response-create-default";
import {AccountAttributes} from "../entities/account-entity";
import {generateAccountCreateData} from "../../utils/generateAccountCreateData";

export class AccountService implements IAccountService {

    private accountRepository: AccountRepository;

    constructor(accountRepository: AccountRepository) {
        this.accountRepository = accountRepository;
    }

    async create(account: RequestCreateAccountModel): Promise<IResponseCreateDefault<AccountAttributes|null>> {
        try {
            const validate_account = await this.accountRepository.getByEmail(account.business_email);
            if (validate_account) {
                return {
                    status: 409,
                    message: 'account already exists',
                    data: null
                }
            }
            const account_data = generateAccountCreateData(account);
            const new_account = await this.accountRepository.create(account_data);
            return {
                status: 200,
                message: 'account created successfully',
                data: new_account
            }
        } catch (error) {
            throw error;
        }
    }

    async getById(id: string): Promise<IResponseCreateDefault<AccountAttributes | null>> {
        try {
            const account = await this.accountRepository.getById(id);
            if (!account) {
                return {
                    status: 404,
                    message: 'Account not found',
                    data: null
                }
            }
            return {
                status: 200,
                message: 'account was found successfully',
                data: account
            }
        } catch (error) {
            throw error;
        }
    }

    async getAll(): Promise<IResponseCreateDefault<AccountAttributes[]>> {
        try {
            const all_accounts = await this.accountRepository.getAll();
            return {
                status: 200,
                message: 'These are the accounts',
                data: all_accounts
            }
        } catch (error) {
            throw error;
        }
    }

}