import {IAccountRepository} from "../../domain/interfaces/repositories/i-account-repository";
import AccountEntity, {AccountAttributes, AccountCreationAttributes} from "../../domain/entities/account-entity";


export class AccountRepository implements IAccountRepository {

    constructor() {
    }

    async create(account: AccountCreationAttributes): Promise<AccountAttributes> {
        try {
            const new_account = await AccountEntity.create(account);
            return {
                id: new_account.dataValues.id,
                create_date: new_account.dataValues.create_date,
                account_status: new_account.dataValues.account_status,
                subscription_plan: new_account.dataValues.subscription_plan,
                image_logo: new_account.dataValues.image_logo,
                business_phone: new_account.dataValues.business_phone,
                business_email: new_account.dataValues.business_email,
                business_address: new_account.dataValues.business_address,
                business_name: new_account.dataValues.business_name,
            }
        } catch (error) {
            console.error('************ error al crear nueva cuenta ************');
            console.error(error);
            throw error;
        }
    }

    async getById(id: string): Promise<AccountAttributes | null> {
        try {
            const account = await AccountEntity.findByPk(id, {
                attributes: {exclude: ['createdAtt', 'updatedAt']}
            })
            if (account) {
                return account;
            }
            return null
        } catch (error) {
            console.error('************ error al obtener cuenta por id ************');
            console.error(error);
            throw error;
        }
    }


    async getByEmail(email: string): Promise<AccountAttributes | null> {
        try {
            const account = await AccountEntity.findOne( {
                where: { business_email: email },
                attributes: { exclude: ['createdAtt', 'updatedAt'] }
            })
            if (account) {
                return account;
            }
            return null
        } catch (error) {
            console.error('************ error al obtener cuenta por email ************');
            console.error(error);
            throw error;
        }
    }

    async getAll(): Promise<AccountAttributes[]> {
        try {
            const accounts = await AccountEntity.findAll({
                attributes: {exclude: ['createdAtt', 'updatedAt']},
                order: [['create_date', 'DESC']],
            });
            const all_accounts: AccountAttributes[] = [];
            if (accounts) {
                for (const account of accounts) {
                    all_accounts.push({
                        ...account.dataValues,
                    });
                }
                return all_accounts;
            }
            return [];
        } catch (error) {
            console.error('************ error al obtener todas las cuentas ************');
            console.error(error);
            throw error;
        }
    }
}