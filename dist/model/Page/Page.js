"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../config/database"));
class Page extends sequelize_1.Model {
    id;
    images;
    menu;
    title;
    footer;
    createdAt;
    updatedAt;
}
Page.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    images: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false,
    },
    menu: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    footer: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    timestamps: true,
    tableName: 'page_interface',
});
exports.default = Page;
