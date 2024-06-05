interface IObj {
    id: number;
    Title: string;
    date: Date;
}

class ObjList {
    private list: IObj[] = [];

    constructor(list?: IObj[]) {
        if (list) this.list = list;
    }

    public sortBy(sortField: 'id' | 'date', direction: 'asc' | 'desc') {
        this.list.sort(
            (a, b) => {
                if (a[sortField] > b[sortField]) {
                    return direction === 'asc' ? -1 : 1;
                } else if (a[sortField] === b[sortField]) {
                    return 0;
                } else {
                    return direction === 'asc' ? -1 : 1;;
                };
            }
        );

        return this;
    }

    public addObj(obj: IObj) {
        this.list.push(obj);
    }

    public getObjs(): IObj[] {
        return this.list;
    }

    public count(): number {
        return this.list.length;
    }
}

interface IIterator<T> {
    next(): T | undefined;
    current(): T | undefined;
    prev(): T | undefined;
    index(): number;
}

class ObjIterator implements IIterator<IObj> {
    private position: number = 0;

    constructor(private objList: ObjList) {}

    public next(): IObj | undefined {
        this.position += 1;
        return this.current();
    }

    public prev(): IObj | undefined {
        this.position -= 1;
        return this.current();
    }

    public index(): number {
        return this.position;
    }

    public current() {
        return this.objList.getObjs()[this.position];
    }
}

const objList = new ObjList();

objList.addObj({
    id: 1,
    Title: 'First',
    date: new Date(2021, 11, 17)
});
objList.addObj({
    id: 2,
    Title: 'Second',
    date: new Date(2021, 11, 18)
});
console.log('Obj list', objList.getObjs());

const objIteratorById = new ObjIterator(objList.sortBy('id', 'asc'));
console.log('Current', objIteratorById.current());
console.log('Next', objIteratorById.next());
console.log('Prev', objIteratorById.prev());
console.log('Index', objIteratorById.index());

const objIteratorByDate = new ObjIterator(objList.sortBy('date', 'desc'));
console.log('Current', objIteratorByDate.current());
console.log('Next', objIteratorByDate.next());
console.log('Prev', objIteratorByDate.prev());
console.log('Index', objIteratorByDate.index());

