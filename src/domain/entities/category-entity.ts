import { DataTypes, Model, Optional } from "sequelize";
import {sequelize} from '../../infrastructure/config/sequelizeConfig';

export interface CategoryAttributes {
    id: string;
    name: string;
    description: string;
    create_date: number;
    account_id: string;
}

export interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}

class CategoryEntity extends Model<CategoryAttributes, CategoryCreationAttributes> implements CategoryAttributes {
    public id!: string;
    public name!: string;
    public description!: string;
    public create_date!: number;
    public account_id!: string;
}

CategoryEntity.init({
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
    description: {
        field: 'description',
        type: DataTypes.TEXT,
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
}, {
    sequelize,
    tableName: 'categories'
});

export default CategoryEntity;