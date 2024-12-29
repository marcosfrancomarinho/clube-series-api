"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PageInterfaceRepository {
    page;
    constructor(page) {
        this.page = page;
    }
    getDatasPageInterface = async () => {
        const datas = await this.page.findOne({
            where: { id: 1 },
            raw: true,
            attributes: ['images', 'footer', 'menu', 'id', 'title'],
        });
        return datas;
    };
}
exports.default = PageInterfaceRepository;
