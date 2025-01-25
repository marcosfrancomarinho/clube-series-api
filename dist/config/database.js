"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var pg_1 = __importDefault(require("pg"));
var pool = new pg_1.default.Pool({
    connectionString: process.env.URL_DB,
    ssl: {
        rejectUnauthorized: false,
    },
});
exports.pool = pool;
