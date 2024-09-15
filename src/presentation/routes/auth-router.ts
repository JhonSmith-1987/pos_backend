import express from "express";
import {Request, Response} from 'express';
import {IVerifyAuthUseCase} from "../../domain/interfaces/use-case/auth/i-verify-auth-use-case";

export default function AuthRouter(
    verifyAuthUseCase:IVerifyAuthUseCase,
) {
    const router = express.Router();

    router.post('/verify_login', async (req: Request, res: Response) => {
        try {
            const response = await verifyAuthUseCase.execute(req.body);
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