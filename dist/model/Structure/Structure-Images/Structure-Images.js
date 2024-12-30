"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../../config/database"));
class StructureImages extends sequelize_1.Model {
    id;
    url;
    title;
    createdAt;
    updatedAt;
}
StructureImages.init({
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.CHAR(50),
        allowNull: false,
    },
    url: {
        type: sequelize_1.DataTypes.CHAR(50),
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    timestamps: true,
    tableName: 'structure_images',
});
exports.default = StructureImages;
