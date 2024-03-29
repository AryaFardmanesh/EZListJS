const { LinkedList } = require('../src/ezlist.dev');

let linkedList;

beforeEach(() => {
    linkedList = new LinkedList();
});

describe('Test .isEmpty method - Group', () => {
    it('Test .isEmpty method - Unit 1', () => {
        let actual = linkedList.isEmpty();
        let expected = true;

        expect(actual).toEqual(expected);
    });

    it('Test .isEmpty method - Unit 2', () => {
        linkedList.add('item');

        let actual = linkedList.isEmpty();
        let expected = false;

        expect(actual).toEqual(expected);
    });
});

describe('Test .add & .size & .toArray method - Group', () => {
    it('Test .add & .size & .toArray method - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');

        let actual = linkedList.toArray();
        let expected = ['item 1', 'item 2', 'item 3'];

        expect(actual).toEqual(expected);
        expect(linkedList.size()).toEqual(expected.length);
    });

    it('Test .add & .size & .toArray method - Unit 2', () => {
        linkedList.add('item 1', 0);
        linkedList.add('item 2', 0);
        linkedList.add('item 3', 0);

        let actual = linkedList.toArray();
        let expected = ['item 3', 'item 2', 'item 1'];

        expect(actual).toEqual(expected);
        expect(linkedList.size()).toEqual(expected.length);
    });

    it('Test .add & .size & .toArray method - Unit 3', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4', 0);
        linkedList.add('item 5', 2);

        let actual = linkedList.toArray();
        let expected = ['item 4', 'item 1', 'item 5', 'item 2', 'item 3'];

        expect(actual).toEqual(expected);
        expect(linkedList.size()).toEqual(expected.length);
    });

    it('Test .add & .size & .toArray method - Unit 4', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4', 2);
        linkedList.add('item 5', 2);
        linkedList.add('item 6', 2);
        linkedList.add('item 7', 2);
        linkedList.add('item 8', 2);

        let actual = linkedList.toArray();
        let expected = ['item 1', 'item 2', 'item 8', 'item 7', 'item 6', 'item 5', 'item 4', 'item 3'];

        expect(actual).toEqual(expected);
        expect(linkedList.size()).toEqual(expected.length);
    });

    it('Test .add method - Range Error - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');

        expect(() => {
            linkedList.add('item x', 4);
        }).toThrow(RangeError);
    });

    it('Test .add method - Range Error - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');

        expect(() => {
            linkedList.add('item x', -1);
        }).toThrow(RangeError);
    });

    it('Test .add method - Type Error - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');

        expect(() => {
            linkedList.add('item x', 'other');
        }).toThrow(TypeError);
    });
});

describe('Test .remove & .size method - Group', () => {
    it('Test .remove & .size method - Unit 1', () => {
        linkedList.remove();

        let actual = linkedList.toArray();
        let expected = [];

        expect(actual).toEqual(expected);
        expect(linkedList.size()).toEqual(expected.length);
    });

    it('Test .remove & .size method - Unit 2', () => {
        linkedList.add('item');
        linkedList.remove(0);

        let actual = linkedList.toArray();
        let expected = [];

        expect(actual).toEqual(expected);
        expect(linkedList.size()).toEqual(expected.length);
    });

    it('Test .remove & .size method - Unit 3', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.remove(0);

        let actual = linkedList.toArray();
        let expected = ['item 2'];

        expect(actual).toEqual(expected);
        expect(linkedList.size()).toEqual(expected.length);
    });

    it('Test .remove & .size method - Unit 4', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.remove();

        let actual = linkedList.toArray();
        let expected = ['item 1'];

        expect(actual).toEqual(expected);
        expect(linkedList.size()).toEqual(expected.length);
    });

    it('Test .remove & .size method - Unit 5', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.remove();
        linkedList.remove();

        let actual = linkedList.toArray();
        let expected = [];

        expect(actual).toEqual(expected);
        expect(linkedList.size()).toEqual(expected.length);
    });

    it('Test .remove & .size method - Unit 6', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.remove(1);

        let actual = linkedList.toArray();
        let expected = ['item 1', 'item 3'];

        expect(actual).toEqual(expected);
        expect(linkedList.size()).toEqual(expected.length);
    });

    it('Test .remove & .size method - Unit 7', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.remove(3);
        linkedList.remove(2);
        linkedList.remove(1);
        linkedList.remove(0);

        let actual = linkedList.toArray();
        let expected = [];

        expect(actual).toEqual(expected);
        expect(linkedList.size()).toEqual(expected.length);
    });

    it('Test .remove & .size method - Unit 8', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.remove(0);
        linkedList.remove(0);
        linkedList.remove(0);
        linkedList.remove(0);

        let actual = linkedList.toArray();
        let expected = [];

        expect(actual).toEqual(expected);
        expect(linkedList.size()).toEqual(expected.length);
    });

    it('Test .remove method - Range Error - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        expect(() => {
            linkedList.remove(4);
        }).toThrow(RangeError);
    });

    it('Test .remove method - Range Error - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        expect(() => {
            linkedList.remove(-1);
        }).toThrow(RangeError);
    });

    it('Test .remove method - Range Error - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.remove(-1);
        }).toThrow(RangeError);
    });

    it('Test .remove method - Range Error - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.remove(6);
        }).toThrow(RangeError);
    });

    it('Test .remove method - Type Error - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');

        expect(() => {
            linkedList.remove('other');
        }).toThrow(TypeError);
    });
});

describe('Test .item method - Group', () => {
    it('Test .item method - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        let actual = linkedList.item();
        let expected = 'item 4';

        expect(actual).toEqual(expected);
    });

    it('Test .item method - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        let actual = linkedList.item(1);
        let expected = 'item 2';

        expect(actual).toEqual(expected);
    });

    it('Test .item method - Unit 3', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        let actual = linkedList.item(-1);
        let expected = undefined;

        expect(actual).toEqual(expected);
    });

    it('Test .item method - Unit 4', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        let actual = [linkedList.item(0), linkedList.item(2)];
        let expected = ['item 1', 'item 3'];

        expect(actual).toEqual(expected);
    });

    it('Test .item method - Unit 5', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        let actual = [linkedList.item(0), linkedList.item(2), linkedList.item(5)];
        let expected = ['item 1', 'item 3', undefined];

        expect(actual).toEqual(expected);
    });

    it('Test .item method - Type Error - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');

        expect(() => {
            linkedList.item('other');
        }).toThrow(TypeError);
    });
});

describe('Test .indexOf method - Group', () => {
    it('Test .indexOf method - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        let actual = linkedList.indexOf('item 2');
        let expected = 1;

        expect(actual).toEqual(expected);
    });

    it('Test .indexOf method - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        let actual = [linkedList.indexOf('item 2'), linkedList.indexOf('item 4')];
        let expected = [1, 3];

        expect(actual).toEqual(expected);
    });

    it('Test .indexOf method - Unit 3', () => {
        linkedList.add('item 1');

        let actual = linkedList.indexOf('item 1');
        let expected = 0;

        expect(actual).toEqual(expected);
    });

    it('Test .indexOf method - Unit 4', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        let actual = linkedList.indexOf('item 5');
        let expected = -1;

        expect(actual).toEqual(expected);
    });

    it('Test .indexOf method - Unit 5', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        let actual = [
            linkedList.indexOf('item 5'),
            linkedList.indexOf('item 4'),
            linkedList.indexOf('item 1'),
            linkedList.indexOf('item 2')
        ];
        let expected = [-1, 3, 0, 1];

        expect(actual).toEqual(expected);
    });

    it('Test .indexOf method - Unit 6', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        let actual = linkedList.indexOf('item 2', 1);
        let expected = 1;

        expect(actual).toEqual(expected);
    });

    it('Test .indexOf method - Unit 7', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        let actual = linkedList.indexOf('item 1', 1);
        let expected = -1;

        expect(actual).toEqual(expected);
    });

    it('Test .indexOf method - Unit 8', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        let actual = linkedList.indexOf('item 4', 1, 3);
        let expected = -1;

        expect(actual).toEqual(expected);
    });

    it('Test .indexOf method - Unit 9', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        let actual = linkedList.indexOf('item 4', 3, 4);
        let expected = 3;

        expect(actual).toEqual(expected);
    });

    it('Test .indexOf method - Unit 10', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        let actual = linkedList.indexOf('item 4', 4, 4);
        let expected = -1;

        expect(actual).toEqual(expected);
    });

    it('Test .indexOf method - Unit 11', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        let actual = linkedList.indexOf('item 4', 0, 3);
        let expected = -1;

        expect(actual).toEqual(expected);
    });

    it('Test .indexOf method - Unit 12', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        let actual = linkedList.indexOf('item 4', 3, 3);
        let expected = -1;

        expect(actual).toEqual(expected);
    });

    it('Test .indexOf method - Range Error - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.indexOf('', -1);
        }).toThrow(RangeError);
    });

    it('Test .indexOf method - Range Error - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.indexOf('', 6);
        }).toThrow(RangeError);
    });

    it('Test .indexOf method - Range Error - Unit 3', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.indexOf('', 0, -1);
        }).toThrow(RangeError);
    });

    it('Test .indexOf method - Range Error - Unit 4', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.indexOf('', 0, 10);
        }).toThrow(RangeError);
    });

    it('Test .indexOf method - Type Error - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');

        expect(() => {
            linkedList.indexOf('item 1', 'other');
        }).toThrow(TypeError);
    });

    it('Test .indexOf method - Type Error - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');

        expect(() => {
            linkedList.indexOf('item 1', 0, 'other');
        }).toThrow(TypeError);
    });
});

describe('Test .lastIndexOf method - Group', () => {
    it('Test .lastIndexOf method - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        let actual = linkedList.lastIndexOf('item 2');
        let expected = 1;

        expect(actual).toEqual(expected);
    });

    it('Test .lastIndexOf method - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 2');
        linkedList.add('item 4');

        let actual = linkedList.lastIndexOf('item 2');
        let expected = 2;

        expect(actual).toEqual(expected);
    });

    it('Test .lastIndexOf method - Unit 3', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');

        let actual = linkedList.lastIndexOf('item 2', 4, 3);
        let expected = -1;

        expect(actual).toEqual(expected);
    });

    it('Test .lastIndexOf method - Unit 4', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 4');
        linkedList.add('item 5');

        let actual = linkedList.lastIndexOf('item 4', 5, 3);
        let expected = 4;

        expect(actual).toEqual(expected);
    });

    it('Test .lastIndexOf method - Range Error - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.lastIndexOf('', -1);
        }).toThrow(RangeError);
    });

    it('Test .lastIndexOf method - Range Error - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.lastIndexOf('', 6);
        }).toThrow(RangeError);
    });

    it('Test .lastIndexOf method - Range Error - Unit 3', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.lastIndexOf('', 0, -1);
        }).toThrow(RangeError);
    });

    it('Test .lastIndexOf method - Range Error - Unit 4', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.lastIndexOf('', 0, 10);
        }).toThrow(RangeError);
    });

    it('Test .lastIndexOf method - Type Error - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');

        expect(() => {
            linkedList.lastIndexOf('item 1', 'other');
        }).toThrow(TypeError);
    });

    it('Test .lastIndexOf method - Type Error - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');

        expect(() => {
            linkedList.lastIndexOf('item 1', 0, 'other');
        }).toThrow(TypeError);
    });
});

describe('Test .include method - Group', () => {
    it('Test .include method - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        let actual = linkedList.include('item 4');
        let expected = true;

        expect(actual).toEqual(expected);
    });

    it('Test .include method - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        let actual = linkedList.include('item 1');
        let expected = true;

        expect(actual).toEqual(expected);
    });

    it('Test .include method - Unit 3', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        let actual = linkedList.include('item 5');
        let expected = true;

        expect(actual).toEqual(expected);
    });

    it('Test .include method - Unit 4', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        let actual = linkedList.include('item 6');
        let expected = false;

        expect(actual).toEqual(expected);
    });

    it('Test .include method - Unit 5', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        let actual = linkedList.include('item 1', 1);
        let expected = false;

        expect(actual).toEqual(expected);
    });

    it('Test .include method - Unit 6', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        let actual = linkedList.include('item 3', 1, 2);
        let expected = false;

        expect(actual).toEqual(expected);
    });

    it('Test .include method - Unit 7', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        let actual = linkedList.include('item 3', 1, 3);
        let expected = true;

        expect(actual).toEqual(expected);
    });

    it('Test .include method - Unit 8', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        let actual = linkedList.include('item 3', 2, linkedList.size() - 1);
        let expected = true;

        expect(actual).toEqual(expected);
    });

    it('Test .include method - Range Error - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.include('', -1);
        }).toThrow(RangeError);
    });

    it('Test .include method - Range Error - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.include('', 6);
        }).toThrow(RangeError);
    });

    it('Test .include method - Range Error - Unit 3', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.include('', 0, -1);
        }).toThrow(RangeError);
    });

    it('Test .include method - Range Error - Unit 4', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.include('', 0, 10);
        }).toThrow(RangeError);
    });

    it('Test .include method - Type Error - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');

        expect(() => {
            linkedList.include('item 1', 'other');
        }).toThrow(TypeError);
    });

    it('Test .include method - Type Error - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');

        expect(() => {
            linkedList.include('item 1', 0, 'other');
        }).toThrow(TypeError);
    });
});

describe('Test .findAll method - Group', () => {
    it('Test .findAll method - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        let actual = linkedList.findAll('item 3');
        let expected = ['item 3'];

        expect(actual).toEqual(expected);
    });

    it('Test .findAll method - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 3');
        linkedList.add('item 3');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 3');

        let actual = linkedList.findAll('item 3');
        let expected = ['item 3', 'item 3', 'item 3', 'item 3'];

        expect(actual).toEqual(expected);
    });

    it('Test .findAll method - Unit 3', () => {
        linkedList.add('item 1');
        linkedList.add('item 3');
        linkedList.add('item 3');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 3');

        let actual = linkedList.findAll('item 3', 2);
        let expected = ['item 3', 'item 3', 'item 3'];

        expect(actual).toEqual(expected);
    });

    it('Test .findAll method - Unit 4', () => {
        linkedList.add('item 1');
        linkedList.add('item 3');
        linkedList.add('item 3');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 3');

        let actual = linkedList.findAll('item 3', 2);
        let expected = ['item 3', 'item 3', 'item 3'];

        expect(actual).toEqual(expected);
    });

    it('Test .findAll method - Range Error - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.findAll('', -1);
        }).toThrow(RangeError);
    });

    it('Test .findAll method - Range Error - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.findAll('', 6);
        }).toThrow(RangeError);
    });

    it('Test .findAll method - Range Error - Unit 3', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.findAll('', 0, -1);
        }).toThrow(RangeError);
    });

    it('Test .findAll method - Range Error - Unit 4', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.findAll('', 0, 10);
        }).toThrow(RangeError);
    });

    it('Test .findAll method - Type Error - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');

        expect(() => {
            linkedList.findAll('item 1', 'other');
        }).toThrow(TypeError);
    });

    it('Test .findAll method - Type Error - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');

        expect(() => {
            linkedList.findAll('item 1', 0, 'other');
        }).toThrow(TypeError);
    });
});

describe('Test .forEach method - Group', () => {
    it('Test .forEach method - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        let actual = [];
        linkedList.forEach((value) => {
            actual.push(value);
        });
        let expected = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];

        expect(actual).toEqual(expected);
    });

    it('Test .forEach method - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        let actual = [];
        linkedList.forEach((value) => {
            actual.push(value);
        }, 1, 3);
        let expected = ['item 2', 'item 3'];

        expect(actual).toEqual(expected);
    });

    it('Test .forEach method - Unit 3', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        let actual = [];
        linkedList.forEach((value) => {
            actual.push(value);
        }, 1);
        let expected = ['item 2', 'item 3', 'item 4', 'item 5'];

        expect(actual).toEqual(expected);
    });

    it('Test .forEach method - Unit 4', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        let actual = [];
        linkedList.forEach((value) => {
            actual.push(value);
        }, 0, 3);
        let expected = ['item 1', 'item 2', 'item 3'];

        expect(actual).toEqual(expected);
    });

    it('Test .forEach method - Range Error - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.forEach(() => {}, -1);
        }).toThrow(RangeError);
    });

    it('Test .forEach method - Range Error - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.forEach(() => {}, 6);
        }).toThrow(RangeError);
    });

    it('Test .forEach method - Range Error - Unit 3', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.forEach(() => {}, 0, -1);
        }).toThrow(RangeError);
    });

    it('Test .forEach method - Range Error - Unit 4', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.forEach(() => {}, 0, 10);
        }).toThrow(RangeError);
    });

    it('Test .forEach method - Type Error - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');

        expect(() => {
            linkedList.forEach(() => {}, 'other');
        }).toThrow(TypeError);
    });

    it('Test .forEach method - Type Error - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');

        expect(() => {
            linkedList.forEach(() => {}, 0, 'other');
        }).toThrow(TypeError);
    });

    describe('Test .forEach method change main - Group', () => {
        it('It should not be able to make any changes to the main list data - Unit 1', () => {
            linkedList.add('item 1');
            linkedList.add('item 2');
            linkedList.add('item 3');
            linkedList.add('item 4');

            linkedList.forEach((value) => {
                value = 'item x';
            });

            let actual = linkedList.toArray();
            let expected = ['item 1', 'item 2', 'item 3', 'item 4'];

            expect(actual).toEqual(expected);
        });

        it('It should not be able to make any changes to the main list data - Unit 2', () => {
            linkedList.add({ id : 1 });
            linkedList.add({ id : 2 });
            linkedList.add({ id : 3 });
            linkedList.add({ id : 4 });

            linkedList.forEach((value) => {
                value.id = 0;
            });

            let actual = linkedList.toArray();
            let expected = [{ id : 1 }, { id : 2 }, { id : 3 }, { id : 4 }];

            expect(actual).toEqual(expected);
        });

        it('It should not be able to make any changes to the main list data - Unit 3', () => {
            linkedList.add([1]);
            linkedList.add([2]);
            linkedList.add([3]);
            linkedList.add([4]);

            linkedList.forEach((value) => {
                value[0] = 0;
            });

            let actual = linkedList.toArray();
            let expected = [[1], [2], [3], [4]];

            expect(actual).toEqual(expected);
        });

        it('It should not be able to make any changes to the main list data - Unit 4', () => {
            linkedList.add(function () {});
            linkedList.add(function () {});
            linkedList.add(function () {});
            linkedList.add(function () {});

            linkedList.forEach((value) => {
                value = 0;
            });

            let actual = linkedList.toArray();
            let expected = [0, 0, 0, 0];

            expect(actual).not.toEqual(expected);
        });
    });

    describe('Test .forEach method index parameter - Group', () => {
        it('It should correctly index the data in the list to the callBackFunction - Unit 1', () => {
            linkedList.add('item 1');
            linkedList.add('item 2');
            linkedList.add('item 3');
            linkedList.add('item 4');

            let actual;
            let expected = true;

            linkedList.forEach((value, index) => {
                if (value === 'item 2' && index === 1)
                    actual = true;
                else if (value === 'item 3' && index === 2)
                    actual = true;
                else if (value === 'item 4' && index === 3)
                    actual = true;
                else
                    actual = false;
            });

            expect(actual).toEqual(expected);
        });

        it('It should correctly index the data in the list to the callBackFunction - Unit 2', () => {
            linkedList.add('item 1');
            linkedList.add('item 2');
            linkedList.add('item 3');
            linkedList.add('item 4');

            let actual;
            let expected = true;

            linkedList.forEach((value, index) => {
                if (value === 'item 2' && index === 1)
                    actual = true;
                else if (value === 'item 3' && index === 2)
                    actual = true;
                else if (value === 'item 4' && index === 3)
                    actual = true;
                else
                    actual = false;
            }, 1);

            expect(actual).toEqual(expected);
        });

        it('It should correctly index the data in the list to the callBackFunction - Unit 3', () => {
            linkedList.add('item 1');
            linkedList.add('item 2');
            linkedList.add('item 3');
            linkedList.add('item 4');

            let actual;
            let expected = true;

            linkedList.forEach((value, index) => {
                if (value === 'item 2' && index === 1)
                    actual = true;
                else if (value === 'item 3' && index === 2)
                    actual = true;
                else
                    actual = false;
            }, 1, 3);

            expect(actual).toEqual(expected);
        });
    });
});

describe('Test .toArray method - Group', () => {
    it('Test .toArray method - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        let actual = linkedList.toArray(0, 4);
        let expected = ['item 1', 'item 2', 'item 3', 'item 4'];

        expect(actual).toEqual(expected);
    });

    it('Test .toArray method - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        let actual = linkedList.toArray(2, 4);
        let expected = ['item 3', 'item 4'];

        expect(actual).toEqual(expected);
    });

    it('Test .toArray method - Range Error - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.toArray(-1);
        }).toThrow(RangeError);
    });

    it('Test .toArray method - Range Error - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.toArray(6);
        }).toThrow(RangeError);
    });

    it('Test .toArray method - Range Error - Unit 3', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.toArray(0, -1);
        }).toThrow(RangeError);
    });

    it('Test .toArray method - Range Error - Unit 4', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');
        linkedList.add('item 4');
        linkedList.add('item 5');

        expect(() => {
            linkedList.toArray(0, 10);
        }).toThrow(RangeError);
    });

    it('Test .toArray method - Type Error - Unit 1', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');

        expect(() => {
            linkedList.toArray('other');
        }).toThrow(TypeError);
    });

    it('Test .toArray method - Type Error - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');
        linkedList.add('item 3');

        expect(() => {
            linkedList.toArray(0, 'other');
        }).toThrow(TypeError);
    });
});

describe('Test .toList method - Group', () => {
    it('It should correctly adding array into the list - Unit 1', () => {
        let myArr = ['item 1', 'item 2', 'item 3'];
        linkedList.toList(myArr);

        let actual = linkedList.toArray();
        let expected = myArr;

        expect(actual).toEqual(expected);
    });

    it('It should correctly adding array into the list - Unit 2', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');

        let myArr = ['item 3', 'item 4', 'item 5'];
        linkedList.toList(myArr);

        let actual = linkedList.toArray();
        let expected = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];

        expect(actual).toEqual(expected);
    });

    it('It should correctly adding array into the list - Unit 3', () => {
        linkedList.add('item 1');
        linkedList.add('item 2');

        let myArr = ['item 3', 'item 4', 'item 5'];
        linkedList.toList(myArr);

        linkedList.remove();
        linkedList.remove();

        let actual = linkedList.toArray();
        let expected = ['item 1', 'item 2', 'item 3'];

        expect(actual).toEqual(expected);
    });

    it('It should correctly increment size of list - Unit 4', () => {
        let myArr = ['item 1', 'item 2', 'item 3'];
        linkedList.toList(myArr);

        let actual = linkedList.size();
        let expected = 3;

        expect(actual).toEqual(expected);
    });

    it('It should correctly increment size of list - Unit 5', () => {
        let myArr = ['item 1', 'item 2', 'item 3'];
        linkedList.toList(myArr);

        linkedList.remove();

        let actual = linkedList.size();
        let expected = 2;

        expect(actual).toEqual(expected);
    });

    it('It should correctly increment size of list - Unit 6', () => {
        linkedList.add('item 0');

        let myArr = ['item 1', 'item 2', 'item 3'];
        linkedList.toList(myArr);

        let actual = linkedList.size();
        let expected = 4;

        expect(actual).toEqual(expected);
    });

    it('It should correctly increment size of list - Unit 7', () => {
        linkedList.add('item 0');

        let myArr = ['item 1', 'item 2', 'item 3'];
        linkedList.toList(myArr);

        linkedList.remove();

        let actual = linkedList.size();
        let expected = 3;

        expect(actual).toEqual(expected);
    });

    it('It should correctly insert data when the parameter is not array - Unit 8', () => {
        let data = 'Hello world!';
        linkedList.toList(data);

        let actual = linkedList.toArray();
        let expected = Array.from(data);

        expect(actual).toEqual(expected);
    });
});
