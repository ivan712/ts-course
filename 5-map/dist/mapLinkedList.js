"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapLinkedList = void 0;
class MapLinkedListNode {
    constructor(key, value, prev = null, next = null) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}
class MapLinkedList {
    constructor(tail = null, head = null) {
        this.tail = tail;
        this.head = head;
    }
    find(key) {
        let node = this.tail;
        while (node) {
            if (node.key === key) {
                return node;
            }
            node = node.next;
        }
        return null;
    }
    upsert(key, value) {
        const node = this.find(key);
        if (node) {
            node.value = value;
            return;
        }
        const newNode = new MapLinkedListNode(key, value);
        if (!this.tail || !this.head) {
            this.tail = newNode;
            this.head = newNode;
            return;
        }
        this.head.next = newNode;
        newNode.prev = this.head;
        this.head = newNode;
    }
    deleteByKey(key) {
        const node = this.find(key);
        if (!node)
            return;
        if (node.prev)
            node.prev.next = node.next;
        if (node.next)
            node.next.prev = node.prev;
        if (node === this.head)
            this.head = node.prev;
        if (node === this.tail)
            this.tail = node.next;
    }
    getValueByKey(key) {
        const node = this.find(key);
        if (!node)
            return;
        return node.value;
    }
}
exports.MapLinkedList = MapLinkedList;
