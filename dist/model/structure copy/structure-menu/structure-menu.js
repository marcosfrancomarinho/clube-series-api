"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../../config/database"));
class StructureMenu extends sequelize_1.Model {
    id;
    private;
    public;
    title;
}
StructureMenu.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    private: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING(30)),
        allowNull: false,
    },
    public: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING(30)),
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    timestamps: false,
    tableName: 'structure_menu',
});
exports.default = StructureMenu;
