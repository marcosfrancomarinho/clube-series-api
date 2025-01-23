"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class User extends sequelize_1.Model {
    id;
    name;
    email;
    password;
    createdAt;
    updatedAt;
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: {
            name: "unique_email_index",
            msg: "Este email já está registrado.",
        },
        validate: {
            isEmail: {
                msg: "Informe um email válido.",
            },
        },
    },
}, {
    sequelize: database_1.sequelize,
    tableName: "register_user",
    timestamps: true,
});
