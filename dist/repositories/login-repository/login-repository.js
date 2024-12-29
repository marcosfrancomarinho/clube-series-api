"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginRepository {
    user;
    constructor(user) {
        this.user = user;
    }
    querySelectUser = async (email, retrievedData) => {
        const response = await this.user.findOne({
            attributes: retrievedData,
            where: {
                email: email,
            },
            raw: true,
        });
        return response;
    };
}
exports.default = LoginRepository;
