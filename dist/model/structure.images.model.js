"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructureImages = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class StructureImages extends sequelize_1.Model {
    id;
    url;
    title;
    createdAt;
    updatedAt;
}
exports.StructureImages = StructureImages;
StructureImages.init({
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    url: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    sequelize: database_1.sequelize,
    timestamps: true,
    tableName: "structure_images",
});
