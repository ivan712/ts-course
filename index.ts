import { MapLinkedList } from "./mapLinkedList";

const hashArrayLength = 10000;

class CustomMap<T> {
  public elements = new Array<MapLinkedList<T>>(hashArrayLength);

  private hash(key: string): number {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      const char = key.charCodeAt(i);
      index += char;
    }

    return index % hashArrayLength;
  }

  public set(key: string, value: T): void {
    const index = this.hash(key);
    if (!this.elements[index]) this.elements[index] = new MapLinkedList()
    this.elements[index].upsert(key, value);
  }

  public get(key: string): T | undefined {
    return this.elements[this.hash(key)]?.getValueByKey(key);
  }

  public delete(key: string): void {
    this.elements[this.hash(key)].deleteByKey(key);
  }

  public clear(): void {
    this.elements = []
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