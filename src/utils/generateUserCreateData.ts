import {getCurrentTimeInSeconds} from "./getCurrentTimeInSeconds";
import {UserCreationAttributes} from "../domain/entities/user-entity";
import {RequestCreateUser} from "../domain/models/user-model";

export function generateUserCreateData(user: RequestCreateUser, password_hash: string) {
    const user_data: UserCreationAttributes = {
        name: user.name,
        email: user.email,
        password: password_hash,
        user_type: user.user_type,
        status: user.status,
        account_id: user.account_id,
        create_date: getCurrentTimeInSeconds(),
        image: ''
    }
    return user_data;
}