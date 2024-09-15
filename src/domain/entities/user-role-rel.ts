import { DataTypes, Model, Optional } from "sequelize";
import {sequelize} from '../../infrastructure/config/sequelizeConfig';

export interface UserRoleRelAttributes {
    id: string;
    creat_date: number;
    role_id: string;
    user_id: string;
}

export interface UserRoleRelCreationAttributes extends Optional<UserRoleRelAttributes, 'id'> {}

class UserRoleRelEntity extends Model<UserRoleRelAttributes, UserRoleRelCreationAttributes> implements UserRoleRelAttributes {
    public id!: string;
    public creat_date!: number;
    public role_id!: string;
    public user_id!: string;
}

UserRoleRelEntity.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    creat_date: {
        field: 'creat_date',
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    role_id: {
        field: 'role_id',
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
    tableName: 'user-role-rel'
});

export default UserRoleRelEntity;