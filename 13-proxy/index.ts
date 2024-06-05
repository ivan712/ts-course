import QueryGenerator from '../12-builder';

interface IProducts {
    getProductsById(id: number): Promise<any>;
}

class Products implements IProducts {
    private url = 'https://dummyjson.com/products/';
    private queryGenerator;

    constructor () {
        this.queryGenerator = new QueryGenerator();
    }
    getProductsById(id: number): Promise<any> {
        const url = `${this.url}${id}`
        return this.queryGenerator.setUrl(url).exec()
    }
}

class ProductProxy implements IProducts {
    private maxId = 10;
    constructor (private products: Products) {}

    getProductsById(id: number): Promise<any> {
        if (id > this.maxId) throw new Error(`maxId must be less than ${this.maxId}`);
        return this.products.getProductsById(id);
    }
}

const productProxy = new ProductProxy(new Products());

productProxy.getProductsById(100).then(console.log);