/*
 *
 * Developer : Arya Fardmanesh
 * Description : This is a JavaScript library that allows you to easily work with linked list data structures.
 * For more information, refer to the linkedlist.pdf file. In that file, the complete training of this library
 * is available.
 *
*/

class LinkedList {
    constructor() {
        // Start of private fields
        let
            _head = null,
            _tail = null,
            _size = 0
        ;
        // Finish of private fields

        class Node {
            constructor(item) {
                this.value = item ;
                this.next  = null ;
            }
        }

        // Start linked list private methods
        const privateMethods = {
            isEmpty : function () {
                return (_size == 0);
            },
            filter : {
                range : function (index, min, max, methodName) {
                    if (index < min || index > max)
                        throw new RangeError(`The index is out of the specified limit. <Method Call : '.${methodName}' & Input Index : '${index}' & Input Expected : 'index > ${min} && ${index} < ${max}'>`);
                },
                type : function (input, type, methodName) {
                    if (typeof input != type)
                        throw new TypeError(`The input type is not correct. <Method Call : '.${methodName}' & Input : '${input}' & Input Type : '${typeof input}' & Type Expected : '${type}'>`);
                }
            }
        };
        // Start linked list private methods

        // Start linked list public methods
        this.add = function (item, index = _size) {
            privateMethods.filter.type(index, 'number', 'add');
            privateMethods.filter.range(index, 0, _size, 'add');

            const newNode = new Node(item);

            if (privateMethods.isEmpty())
                _head = _tail = newNode;
            else if (index == 0) {
                newNode.next = _head;
                _head = newNode;
            }else if (index == _size) {
                _tail.next = newNode;
                _tail = newNode;
            }else {
                let
                    current         = _head.next    ,
                    beforeCurrent   = _head         ,
                    cursor          = 0
                ;

                while (current !== null) {
                    if (cursor == index - 1)
                        break;

                    current = current.next;
                    beforeCurrent = beforeCurrent.next;
                    cursor++;
                }

                beforeCurrent.next = newNode;
                newNode.next = current;
            }

            _size++;
        }

        this.remove = function (index = _size - 1) {
            if (privateMethods.isEmpty())
                return;

            privateMethods.filter.range(index, 0, _size - 1, 'remove');

            if (index == 0) {
                const head  = _head         ;
                _head       = _head.next    ;
                head.next   = null          ;
            }else {
                let
                    current         = _head.next    ,
                    beforeCurrent   = _head         ,
                    cursor          = 1
                ;

                while (current !== null) {
                    if (cursor == index)
                        break;

                    current = current.next;
                    beforeCurrent = beforeCurrent.next;
                    cursor++;
                }

                beforeCurrent.next = current.next;
                current.next = null;
            }

            _size--;
        }

        this.isEmpty = function () {
            return privateMethods.isEmpty();
        }

        this.size = function () {
            return _size;
        }

        this.item = function (index = _size - 1) {
            privateMethods.filter.type(index, 'number', 'item');

            if (privateMethods.isEmpty())
                return undefined;
            else if (index == 0)
                return _head.value;
            else if (index == (_size - 1))
                return _tail.value;
            else {
                let current = _head.next;
                let cursor = 1;

                while (current !== null) {
                    if (cursor == index) {
                        break;
                    }

                    current = current.next;
                    cursor++;
                }

                return (current === null) ? undefined : current.value;
            }
        }

        this.indexOf = function (item, startIndex = 0, endIndex = _size) {
            privateMethods.filter.type(startIndex, 'number', 'indexOf');
            privateMethods.filter.type(endIndex, 'number', 'indexOf');

            privateMethods.filter.range(startIndex, 0, _size, 'indexOf');
            privateMethods.filter.range(endIndex, 0, _size, 'indexOf');

            let current = _head;
            let cursor = 0;

            while (cursor < startIndex) {
                current = current.next;
                cursor++;
            }

            while (cursor < endIndex) {
                if (current.value === item)
                    return cursor;

                cursor++;
                current = current.next;
            }

            return -1;
        }

        this.lastIndexOf = function (item, startIndex = _size, endIndex = 0) {
            privateMethods.filter.type(startIndex, 'number', 'lastIndexOf');
            privateMethods.filter.type(endIndex, 'number', 'lastIndexOf');

            privateMethods.filter.range(startIndex, 0, _size, 'lastIndexOf');
            privateMethods.filter.range(endIndex, 0, _size, 'lastIndexOf');

            let current = _head;
            let cursor = 0;
            let find = [-1];

            while (cursor < endIndex) {
                current = current.next;
                cursor++;
            }

            while (cursor < startIndex) {
                if (current.value === item)
                    find.push(cursor);

                cursor++;
                current = current.next;
            }

            return find[find.length - 1];
        }

        this.include = function (item, startIndex = 0, endIndex = _size) {
            privateMethods.filter.type(startIndex, 'number', 'include');
            privateMethods.filter.type(endIndex, 'number', 'include');

            privateMethods.filter.range(startIndex, 0, _size, 'include');
            privateMethods.filter.range(endIndex, 0, _size, 'include');

            let current = _head;
            let cursor = 0;

            while (cursor < startIndex) {
                current = current.next;
                cursor++;
            }

            while (cursor < endIndex) {
                if (current.value === item)
                    return true;

                cursor++;
                current = current.next;
            }

            return false;
        }

        this.findAll = function (item, startIndex = 0, endIndex = _size) {
            privateMethods.filter.type(startIndex, 'number', 'findAll');
            privateMethods.filter.type(endIndex, 'number', 'findAll');

            privateMethods.filter.range(startIndex, 0, _size, 'findAll');
            privateMethods.filter.range(endIndex, 0, _size, 'findAll');

            let current = _head;
            let cursor = 0;
            let find = [];

            while (cursor < startIndex) {
                current = current.next;
                cursor++;
            }

            while (cursor < endIndex) {
                if (current.value === item)
                    find.push(current.value);

                cursor++;
                current = current.next;
            }

            return find;
        }

        this.forEach = function (functionToCall, startIndex = 0, endIndex = _size) {
            privateMethods.filter.type(startIndex, 'number', 'findAll');
            privateMethods.filter.type(endIndex, 'number', 'findAll');

            privateMethods.filter.range(startIndex, 0, _size, 'forEach');
            privateMethods.filter.range(endIndex, 0, _size, 'forEach');

            let current = _head;
            let cursor = 0;

            while (cursor < startIndex) {
                current = current.next;
                cursor++;
            }

            while (cursor < endIndex) {
                functionToCall(current.value);

                cursor++;
                current = current.next;
            }
        }

        this.toArray = function (startIndex = 0, endIndex = _size) {
            privateMethods.filter.type(startIndex, 'number', 'toArray');
            privateMethods.filter.type(endIndex, 'number', 'toArray');

            privateMethods.filter.range(startIndex, 0, _size, 'toArray');
            privateMethods.filter.range(endIndex, 0, _size, 'toArray');

            let arr = [];
            let cursor = 0;
            let current = _head;

            let i = 0;
            while (i < startIndex) {
                current = current.next;
                i++;
            }

            while (startIndex < endIndex) {
                arr[cursor++] = current.value;
                current = current.next;
                startIndex++;
            }

            return arr;
        }
        // Finish linked list public methods
    }
}

module.exports = { LinkedList } ;
