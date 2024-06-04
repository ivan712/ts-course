class MapLinkedListNode<T> {
  constructor(
    public key: string,
    public value: T,
    public prev: MapLinkedListNode<T> | null = null,
    public next: MapLinkedListNode<T> | null = null
  ) {}
}

export class MapLinkedList<T> {
  constructor(
    public tail: MapLinkedListNode<T> | null = null,
    public head: MapLinkedListNode<T> | null = null
  ) {}

  public find(key: string): MapLinkedListNode<T> | null {
    let node = this.tail;
    while (node) {
      if (node.key === key) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  public upsert(key: string, value: T): void {
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

  public deleteByKey(key: string): void {
    const node = this.find(key);
    if (!node) return;
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    if (node === this.head) this.head = node.prev;
    if (node === this.tail) this.tail = node.next;
  }

  public getValueByKey(key: string): T | undefined {
    const node = this.find(key);
    if (!node) return;
    return node.value;
  }
}