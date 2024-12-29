"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PageInterfaceAdapter {
    page;
    messageError = 'Fail search datas';
    atribute = ['images', 'footer', 'menu', 'id', 'title'];
    constructor(page) {
        this.page = page;
    }
    querySelectPage = async () => {
        try {
            const datas = await this.page.findOne({
                where: { id: 1 },
                raw: true,
                attributes: this.atribute,
            });
            if (!datas)
                throw new Error(this.messageError);
            return datas;
        }
        catch (error) {
            throw error;
        }
    };
}
exports.default = PageInterfaceAdapter;
