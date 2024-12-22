"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegisterRepository {
    user;
    constructor(user) {
        this.user = user;
    }
    queryCreateUser = async (name, email, password) => {
        await this.user.create({
            name,
            email,
            password,
        });
    };
}
exports.default = RegisterRepository;
