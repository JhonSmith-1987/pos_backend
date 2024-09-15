import { DataTypes, Model, Optional } from "sequelize";
import {sequelize} from '../../infrastructure/config/sequelizeConfig';

export interface ProductAttributes {
    id: string;
    name: string;
    sku: string;
    price: number;
    description: string;
    stock_quantity: number;
    is_active: boolean;
    creat_date: number;
    account_id: string;
    category_id: string;
}

export interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

class ProductEntity extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
    public id!: string;
    public name!: string;
    public sku!: string;
    public price!: number;
    public description!: string;
    public stock_quantity!: number;
    public is_active!: boolean;
    public creat_date!: number;
    public account_id!: string;
    public category_id!: string;
}

ProductEntity.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        field: 'name',
        type: DataTypes.STRING,
        allowNull: false,
    },
    sku: {
        field: 'sku',
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        field: 'price',
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        field: 'description',
        type: DataTypes.TEXT,
        allowNull: false,
    },
    stock_quantity: {
        field: 'stock_quantity',
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    is_active: {
        field: 'is_active',
        type: DataTypes.BOOLEAN,
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
    category_id: {
        field: 'category_id',
        type: DataTypes.UUID,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'products'
});

export default ProductEntity;