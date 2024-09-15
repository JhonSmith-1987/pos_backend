import {AccountAttributes, AccountCreationAttributes} from "../../entities/account-entity";

export interface IAccountRepository {
    create(account: AccountCreationAttributes): Promise<AccountAttributes>;
    getById(id: string): Promise<AccountAttributes|null>;
    getByEmail(email: string): Promise<AccountAttributes|null>;
    getAll(): Promise<AccountAttributes[]>;
}