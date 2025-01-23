"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructureFooter = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class StructureFooter extends sequelize_1.Model {
    id;
    url;
    redes;
    createdAt;
    updatedAt;
}
exports.StructureFooter = StructureFooter;
StructureFooter.init({
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    redes: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: database_1.sequelize,
    timestamps: true,
    tableName: "structure_footer",
});
