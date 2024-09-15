import { DataTypes, Model, Optional } from "sequelize";
import {sequelize} from '../../infrastructure/config/sequelizeConfig';

export interface AccountAttributes {
    id: string;
    business_name: string;
    business_address: string;
    business_phone: string;
    business_email: string;
    subscription_plan: string;
    account_status: string;
    image_logo: string;
    create_date: number;
}

export interface AccountCreationAttributes extends Optional<AccountAttributes, 'id'> {}

class AccountEntity extends Model<AccountAttributes, AccountCreationAttributes> implements AccountAttributes {
    public id!: string;
    public business_name!: string;
    public business_address!: string;
    public business_phone!: string;
    public business_email!: string;
    public subscription_plan!: string;
    public account_status!: string;
    public image_logo!: string;
    public create_date!: number;
}

AccountEntity.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    business_name: {
        field: 'business_name',
        type: DataTypes.STRING,
        allowNull: false,
    },
    business_address: {
        field: 'business_address',
        type: DataTypes.STRING,
        allowNull: false,
    },
    business_phone: {
        field: 'business_phone',
        type: DataTypes.STRING,
        allowNull: false,
    },
    business_email: {
        field: 'business_email',
        type: DataTypes.STRING,
        allowNull: false,
    },
    subscription_plan: {
        field: 'subscription_plan',
        type: DataTypes.STRING,
        allowNull: false,
    },
    account_status: {
        field: 'account_status',
        type: DataTypes.STRING,
        allowNull: false,
    },
    image_logo: {
        field: 'image_logo',
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    create_date: {
        field: 'create_date',
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'account'
});

export default AccountEntity;