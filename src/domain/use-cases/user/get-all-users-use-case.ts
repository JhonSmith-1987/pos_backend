import {UserService} from "../../services/user-service";
import {IResponseCreateDefault} from "../../interfaces/common/i-response-create-default";
import {UserAttributes} from "../../entities/user-entity";
import {IGetAllUsersUseCase} from "../../interfaces/use-case/user/i-get-all-users-use-case";
import {IPaginateString} from "../../interfaces/common/i-paginate";

export class GetAllUsersUseCase implements IGetAllUsersUseCase {

    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async execute(paginate: IPaginateString): Promise<IResponseCreateDefault<UserAttributes[]>> {
        return await this.userService.getAll(paginate);
    }
}