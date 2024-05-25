"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapLinkedList_1 = require("./mapLinkedList");
const hashArrayLength = 10000;
class CustomMap {
    constructor() {
        this.elements = new Array(hashArrayLength);
    }
    hash(key) {
        let index = 0;
        for (let i = 0; i < key.length; i++) {
            const char = key.charCodeAt(i);
            index += char;
        }
        return index % hashArrayLength;
    }
    set(key, value) {
        const index = this.hash(key);
        if (!this.elements[index])
            this.elements[index] = new mapLinkedList_1.MapLinkedList();
        this.elements[index].upsert(key, value);
    }
    get(key) {
        var _a;
        return (_a = this.elements[this.hash(key)]) === null || _a === void 0 ? void 0 : _a.getValueByKey(key);
    }
    delete(key) {
        this.elements[this.hash(key)].deleteByKey(key);
    }
    clear() {
        this.elements = [];
    }
}
const m = new CustomMap();
m.set("a", 1);
m.set("b", 2);
console.log(m.get("a"));
console.log(m.get("b"));
m.delete("a");
console.log(m.get("a"));
console.log(m.get("b"));
m.set("a", "100");
console.log(m.get("a"));
m.set("a", "1000");
console.log(m.get("a"));
m.clear();
console.log(m.get("a"));
m.set("a", "1");
m.set("b", "2");
console.log(m.get("a"));
console.log(m.get("b"));
