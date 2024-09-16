import {ICreateUserUseCase} from "../../interfaces/use-case/user/i-create-user-use-case";
import {UserService} from "../../services/user-service";
import {RequestCreateUser} from "../../models/user-model";
import {IResponseCreateDefault} from "../../interfaces/common/i-response-create-default";
import {UserAttributes} from "../../entities/user-entity";

export class CreateUserUseCase implements ICreateUserUseCase {

    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async execute(user: RequestCreateUser): Promise<IResponseCreateDefault<UserAttributes | null>> {
        return await this.userService.create(user);
    }
}