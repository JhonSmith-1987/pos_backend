import {VerifyAuth} from "../../domain/use-cases/auth/verify-auth";
import express from "express";
import {Request, Response} from 'express';

export default function AuthRouter(
    verifyAuth: VerifyAuth,
) {
    const router = express.Router();

    router.post('/login', async (req: Request, res: Response) => {
        try {
            const response = await verifyAuth.execute(req.body);
            res.status(response.status).send(response);
        } catch (error:any) {
            console.log('****************** error en el auth login ************************');
            console.log(error);
            if (error.response.status === 500) {
                res.status(500).send({
                    status: 500,
                    message: 'Internal server error',
                    data: null
                });
                return;
            }
            res.status(error.response.status).send(error.response.data.data);
        }
    });

    return router;
}