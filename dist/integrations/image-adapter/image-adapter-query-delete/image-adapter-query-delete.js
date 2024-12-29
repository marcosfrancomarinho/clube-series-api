"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImageAdapterQueryDelete {
    page;
    constructor(page) {
        this.page = page;
    }
    removeItem = async (title) => {
        try {
            await this.page.destroy({});
        }
        catch (error) { }
    };
}
exports.default = ImageAdapterQueryDelete;
