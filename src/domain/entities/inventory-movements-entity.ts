import { DataTypes, Model, Optional } from "sequelize";
import {sequelize} from '../../infrastructure/config/sequelizeConfig';

export interface InventoryMovementsAttributes {
    id: string;
    type: string;
    quantity: string;
    creat_date: number;
    account_id: string;
    product_id: string;
}

export interface InventoryMovementsCreationAttributes extends Optional<InventoryMovementsAttributes, 'id'> {}

class InventoryMovementsEntity extends Model<InventoryMovementsAttributes, InventoryMovementsCreationAttributes> implements InventoryMovementsAttributes {
    public id!: string;
    public type!: string;
    public quantity!: string;
    public creat_date!: number;
    public account_id!: string;
    public product_id!: string;
}

InventoryMovementsEntity.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    type: {
        field: 'type',
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        field: 'quantity',
        type: DataTypes.STRING,
        allowNull: false,
    },
    creat_date: {
        field: 'creat_date',
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    account_id: {
        field: 'account_id',
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
    tableName: 'inventory-movements'
});

export default InventoryMovementsEntity;