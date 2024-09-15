import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import {sequelize} from './infrastructure/config/sequelizeConfig'

// entities import
import './domain/entities/account-entity';
import './domain/entities/user-entity';
import './domain/entities/asociation-entities';
import {AccountRepository} from "./infrastructure/repositories/account-repository";
import AccountRouter from "./presentation/routes/account-router";
import {AccountService} from "./domain/services/account-service";
import AuthRouter from "./presentation/routes/auth-router";
import {VerifyAuthUseCase} from "./domain/use-cases/auth/verify-auth-use-case";
import {AuthService} from "./domain/services/auth-service";
import {CreateAccountUseCase} from "./domain/use-cases/account/create-account-use-case";
import {GetAllAccountsUseCase} from "./domain/use-cases/account/get-all-accounts-use-case";
import {GetAccountByIdUseCase} from "./domain/use-cases/account/get-account-by-id-use-case";
import {UserRepository} from "./infrastructure/repositories/user-repository";

export const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({origin: '*'}));

const port = process.env.PORT || 4000;

// middleware for accounts
const accountMiddleware = AccountRouter(
    new CreateAccountUseCase(new AccountService(new AccountRepository())),
    new GetAllAccountsUseCase(new AccountService(new AccountRepository())),
    new GetAccountByIdUseCase(new AccountService(new AccountRepository())),
);

const authMiddleware = AuthRouter(
    new VerifyAuthUseCase(new AuthService(new UserRepository())),
);

// routes
app.use('/api/v1/account', accountMiddleware);
app.use('/api/v1/auth', authMiddleware);

async function main() {
    try {
        await sequelize.sync({force: false});
        app.listen(port, () => {
            console.log('port ==> ', port);
        });
    } catch (error) {
        console.error(`Hubo un error al conectar a la base de datos: ${error}`);
    }
}

main().then();