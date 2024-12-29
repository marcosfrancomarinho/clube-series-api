"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WelcomeControllers {
    welcomeUser = async (req, res) => {
        res.status(200).type('.html').send('<h1>Ola seja bem vindo</h1>');
    };
}
exports.default = WelcomeControllers;
