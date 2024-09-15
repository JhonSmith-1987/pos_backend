import { DataTypes, Model, Optional } from "sequelize";
import {sequelize} from '../../infrastructure/config/sequelizeConfig';

export interface RoleAttributes {
    id: string;
    name: string;
    description: string;
    creat_date: number;
    account_id: string;
}

export interface RoleCreationAttributes extends Optional<RoleAttributes, 'id'> {}

class RoleEntity extends Model<RoleAttributes, RoleCreationAttributes> implements RoleAttributes {
    public id!: string;
    public name!: string;
    public description!: string;
    public creat_date!: number;
    public account_id!: string;
}

RoleEntity.init({
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
}, {
    sequelize,
    tableName: 'roles'
});

export default RoleEntity;