"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
var QueryMethod;
(function (QueryMethod) {
    QueryMethod["GET"] = "GET";
    QueryMethod["POST"] = "POST";
    QueryMethod["PUT"] = "PUT";
    QueryMethod["DELETE"] = "DELETE";
})(QueryMethod || (QueryMethod = {}));
class QueryGenerator {
    constructor() {
        this.method = QueryMethod.GET;
    }
    setMethod(method) {
        this.method = method;
        return this;
    }
    setUrl(url) {
        this.url = url;
        return this;
    }
    setBody(body) {
        this.body = body;
        return this;
    }
    setHeaders(headers) {
        this.headers = headers;
        return this;
    }
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.url) {
                    throw new Error('Url is required');
                }
                const options = {
                    method: this.method,
                    headers: this.headers
                };
                if (this.body) {
                    options.body = JSON.stringify(this.body);
                }
                const response = yield (0, node_fetch_1.default)(this.url, options);
                const data = yield response.json();
                return data;
            }
            catch (error) {
                if (error instanceof Error)
                    throw new Error(`Failed to generate query: ${error.message}`);
                return Promise.reject(error);
            }
        });
    }
}
exports.default = QueryGenerator;
const queryGenerator = new QueryGenerator();
(() => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield queryGenerator
        .setMethod(QueryMethod.GET)
        .setUrl('https://jsonplaceholder.typicode.com/todos/1')
        .exec();
    console.log('data', data);
}))();
