import {RequestCreateAccountModel} from "../domain/models/account-model";
import {AccountCreationAttributes} from "../domain/entities/account-entity";
import {getCurrentTimeInSeconds} from "./getCurrentTimeInSeconds";

export function generateAccountCreateData(account: RequestCreateAccountModel) {
    const account_data: AccountCreationAttributes = {
        business_name: account.business_name,
        business_address: account.business_address,
        business_email: account.business_email,
        business_phone: account.business_phone,
        image_logo: account.image_logo,
        account_status: account.account_status,
        subscription_plan: account.subscription_plan,
        create_date: getCurrentTimeInSeconds(),
    }
    return account_data;
}