import { DataTypes, Model, Optional } from "sequelize";
import {sequelize} from '../../infrastructure/config/sequelizeConfig';

export interface UserAttributes {
    id: string;
    name: string;
    email: string;
    password: string;
    status: string;
    user_type: string;
    image: string;
    create_date: number;
    account_id: string;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class UserEntity extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: string;
    public name!: string;
    public email!: string;
    public password!: string;
    public status!: string;
    public user_type!: string;
    public image!: string;
    public create_date!: number;
    public account_id!: string;
}

UserEntity.init({
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
    email: {
        field: 'email',
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        field: 'password',
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    status: {
        field: 'status',
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_type: {
        field: 'user_type',
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        field: 'image',
        type: DataTypes.STRING(200),
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
    tableName: 'users'
});

export default UserEntity;