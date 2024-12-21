"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VerifyDatasUser {
    joi;
    constructor(joi) {
        this.joi = joi;
    }
    hasError(params, schema) {
        const { error } = schema.validate(params);
        if (error)
            throw new Error(error.message);
    }
    nameUser(name) {
        const schema = this.joi
            .string()
            .required()
            .trim()
            .min(3)
            .max(30)
            .empty()
            .label('nome do usuário');
        this.hasError(name, schema);
    }
    emailUser(email) {
        const schema = this.joi
            .string()
            .required()
            .trim()
            .min(10)
            .max(35)
            .email()
            .empty()
            .label('email do usuário');
        this.hasError(email, schema);
    }
    passwordUser(password) {
        const schema = this.joi
            .string()
            .required()
            .trim()
            .min(8)
            .max(15)
            .empty()
            .label('senha do usuário');
        this.hasError(password, schema);
    }
    registerUser(name, email, password) {
        try {
            this.nameUser(name);
            this.emailUser(email);
            this.passwordUser(password);
        }
        catch (error) {
            throw error;
        }
    }
    loginUser(email, password) {
        try {
            this.emailUser(email);
            this.passwordUser(password);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = VerifyDatasUser;
