import {RequestCreateAccountModel} from "../domain/models/account-model";
import {getCurrentTimeInSeconds} from "./getCurrentTimeInSeconds";
import {UserCreationAttributes} from "../domain/entities/user-entity";

export function generateUserCreateData(register: RequestCreateAccountModel, account_id: string, password_hash: string) {
    const user: UserCreationAttributes = {
        name: register.user_name,
        email: register.business_email,
        password: password_hash,
        user_type: 'admin',
        status: 'active',
        account_id: account_id,
        creat_date: getCurrentTimeInSeconds(),
    }
    return user;
}