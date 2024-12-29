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
(async () => {
    await Page.create({
        images: [
            { title: 'aneis', url: '/images/aneis.jpg' },
            { title: 'bad', url: '/images/bad.jpg' },
            { title: 'dark', url: '/images/dark.jpg' },
            { title: 'game', url: '/images/game.jpg' },
            { title: 'pinguim', url: '/images/Pinguim.jpg' },
            { title: 'quarta', url: '/images/quarta.jpg' },
            { title: 'saul', url: '/images/saul.jpg' },
            { title: 'soprano', url: '/images/sopranos.jpg' },
            { title: 'string', url: '/images/string.jpg' },
            { title: 'the last', url: '/images/the_last.jpg' },
            { title: 'witcher', url: '/images/witcher.jpg' },
            { title: 'lost', url: '/images/lost.jpg' },
            { title: 'office', url: '/images/office.jpg' },
            { title: '100', url: '/images/100.jpg' },
            { title: 'viking', url: '/images/viking.jpg' },
            { title: 'supernatural', url: '/images/supernatural.jpg' },
            { title: 'arcane', url: '/images/arcane.jpg' },
            { title: 'simpson', url: '/images/simpson.jpg' },
        ],
        menu: {
            public: ['Home', 'Login', 'Sign up'],
            private: ['Populares', 'Novidades'],
        },
        title: 'Clube das Séries',
        footer: [
            {
                id: 1,
                url: 'https://www.instagram.com/_marcosmarinho98/',
                redes: 'Instagram',
            },
            {
                id: 2,
                url: 'https://github.com/marcosfrancomarinho/cubo-serie',
                redes: 'GitHub',
            },
            {
                id: 3,
                url: 'https://www.linkedin.com/in/marcos-franco-marinho-031b55187/',
                redes: 'LinkedIn',
            },
            {
                id: 4,
                url: 'https://www.facebook.com/marcos.marinho.16547/?locale=pt_BR',
                redes: 'Facebook',
            },
        ],
    });
})();
exports.default = Page;
