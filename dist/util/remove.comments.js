"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepare = prepare;
function prepare(comand) {
    return comand.replace("--sql", "");
}
