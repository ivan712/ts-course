"use strict";
class ObjList {
    constructor(list) {
        this.list = [];
        if (list)
            this.list = list;
    }
    sortBy(sortField, direction) {
        this.list.sort((a, b) => {
            if (a[sortField] > b[sortField]) {
                return direction === 'asc' ? -1 : 1;
            }
            else if (a[sortField] === b[sortField]) {
                return 0;
            }
            else {
                return direction === 'asc' ? -1 : 1;
                ;
            }
            ;
        });
        return this;
    }
    addObj(obj) {
        this.list.push(obj);
    }
    getObjs() {
        return this.list;
    }
    count() {
        return this.list.length;
    }
}
class ObjIterator {
    constructor(objList) {
        this.objList = objList;
        this.position = 0;
    }
    next() {
        this.position += 1;
        return this.current();
    }
    prev() {
        this.position -= 1;
        return this.current();
    }
    index() {
        return this.position;
    }
    current() {
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
