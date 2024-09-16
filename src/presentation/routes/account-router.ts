import express from "express";
import {Request, Response} from 'express';
import {ICreateUseCase} from "../../domain/interfaces/use-case/account/i-create-use-case";
import {IGetAllUseCase} from "../../domain/interfaces/use-case/account/i-get-all-use-case";
import {IGetByIdUseCase} from "../../domain/interfaces/use-case/account/i-get-by-id-use-case";
import {QueryId} from "../../domain/models/account-model";

export default function AccountRouter(
    createUseCase: ICreateUseCase,
    getAllUseCase: IGetAllUseCase,
    getByIdUseCase: IGetByIdUseCase,
) {
    const router = express.Router();

    router.post('/create', async (req: Request, res: Response) => {
        try {
            const response = await createUseCase.execute(req.body);
            res.status(response.status).send(response);
        } catch (error:any) {
            res.status(500).send({
                status: 500,
                message: 'Internal server error',
                data: null
            });
        }
    });

    router.get('/all', async (_req: Request, res: Response) => {
        try {
            const response = await getAllUseCase.execute();
            res.status(response.status).send(response);
        } catch (error:any) {
            res.status(error.response.status).send(error.response.data);
        }
    });

    router.get('/by_id', async (req: Request, res: Response) => {
        try {
            const query = req.query as unknown as QueryId;
            const response = await getByIdUseCase.execute(query.id);
            res.status(response.status).send(response);
        } catch (error:any) {
            res.status(error.response.status).send(error.response.data);
        }
    });

    return router;
}