"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeControllers = void 0;
class WelcomeControllers {
    welcomeUser = async (req, res) => {
        res.status(200).type(".html").send("<h1>Ola seja bem vindo</h1>");
    };
}
exports.WelcomeControllers = WelcomeControllers;
