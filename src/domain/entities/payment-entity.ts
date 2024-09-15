import { DataTypes, Model, Optional } from "sequelize";
import {sequelize} from '../../infrastructure/config/sequelizeConfig';

export interface PaymentAttributes {
    id: string;
    payment_method: string;
    amount: number;
    creat_date: number;
    order_id: string;
    transaction_id: string;
}

export interface PaymentCreationAttributes extends Optional<PaymentAttributes, 'id'> {}

class PaymentEntity extends Model<PaymentAttributes, PaymentCreationAttributes> implements PaymentAttributes {
    public id!: string;
    public payment_method!: string;
    public amount!: number;
    public creat_date!: number;
    public order_id!: string;
    public transaction_id!: string;
}

PaymentEntity.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    payment_method: {
        field: 'payment_method',
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        field: 'amount',
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    creat_date: {
        field: 'creat_date',
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    order_id: {
        field: 'order_id',
        type: DataTypes.UUID,
        allowNull: false,
    },
    transaction_id: {
        field: 'category_id',
        type: DataTypes.STRING(150),
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'payments'
});

export default PaymentEntity;