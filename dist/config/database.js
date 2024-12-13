"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize({
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'postgres',
});
async function verifyConnectionDataBase() {
    try {
        await sequelize.authenticate();
        console.log('connection database');
    }
    catch (error) {
        console.log(error);
    }
}
// verifyConnectionDataBase(); //teste de conexão;
exports.default = sequelize;
