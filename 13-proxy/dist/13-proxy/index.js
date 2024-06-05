"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _12_builder_1 = __importDefault(require("../12-builder"));
class Products {
    constructor() {
        this.url = 'https://dummyjson.com/products/';
        this.queryGenerator = new _12_builder_1.default();
    }
    getProductsById(id) {
        const url = `${this.url}${id}`;
        return this.queryGenerator.setUrl(url).exec();
    }
}
class ProductProxy {
    constructor(products) {
        this.products = products;
        this.maxId = 10;
    }
    getProductsById(id) {
        if (id > this.maxId)
            throw new Error(`maxId must be less than ${this.maxId}`);
        return this.products.getProductsById(id);
    }
}
const productProxy = new ProductProxy(new Products());
productProxy.getProductsById(100).then(console.log);
