import { DataTypes, Model, Optional } from "sequelize";
import {sequelize} from '../../infrastructure/config/sequelizeConfig';

export interface OrderAttributes {
    id: string;
    total_amount: number;
    status: string;
    payment_method: string;
    create_date: number;
    account_id: string;
    user_id: string;
}

export interface OrderCreationAttributes extends Optional<OrderAttributes, 'id'> {}

class OrderEntity extends Model<OrderAttributes, OrderCreationAttributes> implements OrderAttributes {
    public id!: string;
    public total_amount!: number;
    public status!: string;
    public payment_method!: string;
    public create_date!: number;
    public account_id!: string;
    public user_id!: string;
}

OrderEntity.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    total_amount: {
        field: 'total_amount',
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        field: 'status',
        type: DataTypes.STRING,
        allowNull: false,
    },
    payment_method: {
        field: 'payment_method',
        type: DataTypes.STRING,
        allowNull: false,
    },
    create_date: {
        field: 'create_date',
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    account_id: {
        field: 'account_id',
        type: DataTypes.UUID,
        allowNull: false,
    },
    user_id: {
        field: 'user_id',
        type: DataTypes.UUID,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'orders'
});

export default OrderEntity;