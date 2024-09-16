import express from "express";
import {Request, Response} from 'express';
import {ICreateUserUseCase} from "../../domain/interfaces/use-case/user/i-create-user-use-case";
import {IGetAllUsersUseCase} from "../../domain/interfaces/use-case/user/i-get-all-users-use-case";
import {IPaginateString} from "../../domain/interfaces/common/i-paginate";

export default function UserRouter(
    createUserUseCase: ICreateUserUseCase,
    getAllUsersUseCase: IGetAllUsersUseCase,
) {
    const router = express.Router();

    router.post('/create', async (req: Request, res: Response) => {
        try {
            const response = await createUserUseCase.execute(req.body);
            res.status(response.status).send(response);
        } catch (error:any) {
            if (error.response.status === 500) {
                res.status(500).send({
                    status: 500,
                    message: 'Internal server error',
                    data: null
                });
                return;
            }
            res.status(error.response.status).send(error.response.data);
        }
    });

    router.get('/all_user', async (req: Request, res: Response) => {
        try {
            const query = req.query as unknown as IPaginateString;
            const response = await getAllUsersUseCase.execute(query);
            res.status(response.status).send(response);
        } catch (error:any) {
            if (error.response.status === 500) {
                res.status(500).send({
                    status: 500,
                    message: 'Internal server error',
                    data: null
                });
                return;
            }
            res.status(error.response.status).send(error.response.data);
        }
    });

    return router;
}