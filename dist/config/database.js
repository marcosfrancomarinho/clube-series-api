"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
exports.verifyConnectionDataBase = verifyConnectionDataBase;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: "postgres",
});
exports.sequelize = sequelize;
async function verifyConnectionDataBase() {
    try {
        await sequelize.authenticate();
        console.log("connection database");
    }
    catch (error) {
        console.log(error);
    }
}
