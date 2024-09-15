import { DataTypes, Model, Optional } from "sequelize";
import {sequelize} from '../../infrastructure/config/sequelizeConfig';

export interface OrderItemAttributes {
    id: string;
    quantity: number;
    unit_price: number;
    total_price: number;
    creat_date: number;
    order_id: string;
    product_id: string;
}

export interface OrderItemCreationAttributes extends Optional<OrderItemAttributes, 'id'> {}

class OrderItemEntity extends Model<OrderItemAttributes, OrderItemCreationAttributes> implements OrderItemAttributes {
    public id!: string;
    public quantity!: number;
    public unit_price!: number;
    public total_price!: number;
    public creat_date!: number;
    public order_id!: string;
    public product_id!: string;
}

OrderItemEntity.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    quantity: {
        field: 'quantity',
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    unit_price: {
        field: 'unit_price',
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_price: {
        field: 'total_price',
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
    product_id: {
        field: 'product_id',
        type: DataTypes.UUID,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'order-items'
});

export default OrderItemEntity;