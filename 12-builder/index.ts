import fetch from 'node-fetch';

enum QueryMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

interface IBody {
    [key: string]: any;
}

interface IHeaders {
    [key: string]: string;
}

interface IItem {
    userId?: number;
    id?: number;
    title?: string;
    completed?: boolean;
}

export default class QueryGenerator {
    public method: QueryMethod = QueryMethod.GET;
    public url!: string;
    public body?: IBody;
    public headers?: { [key: string]: string };

    constructor() {}

    public setMethod(method: QueryMethod): QueryGenerator {
        this.method = method;
        return this;
    }

    public setUrl(url: string): QueryGenerator {
        this.url = url;
        return this;
    }

    public setBody(body: object): QueryGenerator {
        this.body = body;
        return this;
    }

    public setHeaders(headers: IHeaders): QueryGenerator {
        this.headers = headers;
        return this;
    }

    public async exec<T = any>(): Promise<T> {
        try {
            if (!this.url) {
                throw new Error('Url is required');
            }

            const options: fetch.RequestInit = {
                method: this.method,
                headers: this.headers
            };

            if (this.body) {
                options.body = JSON.stringify(this.body);
            }

            const response = await fetch(this.url, options);
            const data = await response.json();
            return data;
        } catch (error) {
            if (error instanceof Error)
                throw new Error(`Failed to generate query: ${error.message}`);
            return Promise.reject(error);
        }
    }
}

const queryGenerator = new QueryGenerator();

(async () => {
    const data = await queryGenerator
       .setMethod(QueryMethod.GET)
       .setUrl('https://jsonplaceholder.typicode.com/todos/1')
       .exec<IItem>();

    console.log('data', data);
})()