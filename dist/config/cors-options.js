"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
exports.corsOptions = {
    methods: ['POST', 'GET'],
    origin: ['https://cubo-serie.vercel.app', 'http://localhost:5173'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    exposedHeaders: ['Authorization'],
};
