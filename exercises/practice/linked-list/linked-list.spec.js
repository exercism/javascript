import { LinkedList } from './linked-list';

describe('LinkedList', () => {
  test('pop gets last element from the list', () => {
    const list = new LinkedList();
    list.push(7);
    expect(list.pop()).toBe(7);
  });

  test('push/pop respectively add/remove at the end of the list', () => {
    const list = new LinkedList();
    list.push(11);
    list.push(13);
    expect(list.pop()).toBe(13);
    expect(list.pop()).toBe(11);
  });

  test('shift gets element from the list', () => {
    const list = new LinkedList();
    list.push(17);
    expect(list.shift()).toBe(17);
  });

  test('shift gets first element from the list', () => {
    const list = new LinkedList();
    list.push(23);
    list.push(5);
    expect(list.shift()).toBe(23);
    expect(list.shift()).toBe(5);
  });

  xtest('unshift adds element at the start of the list', () => {
    const list = new LinkedList();
    list.unshift(23);
    list.unshift(5);
    expect(list.shift()).toBe(5);
    expect(list.shift()).toBe(23);
  });

  xtest('pop, push, shift, and unshift can be used in any order', () => {
    const list = new LinkedList();
    list.push(1);
    list.push(2);
    expect(list.pop()).toBe(2);

    list.push(3);
    expect(list.shift()).toBe(1);

    list.unshift(4);
    list.push(5);
    expect(list.shift()).toBe(4);
    expect(list.pop()).toBe(5);
    expect(list.shift()).toBe(3);
  });

  xtest('count an empty list', () => {
    const list = new LinkedList();
    expect(list.count()).toBe(0);
  });

  xtest('count a list with items', () => {
    const list = new LinkedList();
    list.push(37);
    list.push(1);
    expect(list.count()).toBe(2);
  });

  xtest('count is correct after mutation', () => {
    const list = new LinkedList();
    list.push(31);
    expect(list.count()).toBe(1);
    list.unshift(43);
    expect(list.count()).toBe(2);
    list.shift();
    expect(list.count()).toBe(1);
    list.pop();
    expect(list.count()).toBe(0);
  });

  xtest("popping to empty doesn't break the list", () => {
    const list = new LinkedList();
    list.push(41);
    list.push(59);
    list.pop();
    list.pop();

    list.push(47);
    expect(list.count()).toBe(1);
    expect(list.pop()).toBe(47);
  });

  xtest("shifting to empty doesn't break the list", () => {
    const list = new LinkedList();
    list.push(41);
    list.push(59);
    list.shift();
    list.shift();

    list.push(47);
    expect(list.count()).toBe(1);
    expect(list.shift()).toBe(47);
  });

  xtest('deletes the only element', () => {
    const list = new LinkedList();
    list.push(61);
    list.delete(61);
    expect(list.count()).toBe(0);
  });

  xtest('deletes the element with the specified value from the list', () => {
    const list = new LinkedList();
    list.push(71);
    list.push(83);
    list.push(79);

    list.delete(83);

    expect(list.count()).toBe(2);
    expect(list.pop()).toBe(79);
    expect(list.shift()).toBe(71);
  });

  xtest('deletes the element with the specified value from the list, re-assigns tail', () => {
    const list = new LinkedList();
    list.push(71);
    list.push(83);
    list.push(79);

    list.delete(83);

    expect(list.count()).toBe(2);
    expect(list.pop()).toBe(79);
    expect(list.pop()).toBe(71);
  });

  xtest('deletes the element with the specified value from the list, re-assigns head', () => {
    const list = new LinkedList();
    list.push(71);
    list.push(83);
    list.push(79);

    list.delete(83);

    expect(list.count()).toBe(2);
    expect(list.shift()).toBe(71);
    expect(list.shift()).toBe(79);
  });

  xtest('deletes the first of two elements', () => {
    const list = new LinkedList();
    list.push(97);
    list.push(101);

    list.delete(97);

    expect(list.count()).toBe(1);
    expect(list.pop()).toBe(101);
  });

  xtest('deletes the second of two elements', () => {
    const list = new LinkedList();
    list.push(97);
    list.push(101);

    list.delete(101);

    expect(list.count()).toBe(1);
    expect(list.pop()).toBe(97);
  });

  xtest('delete does not modify the list if the element is not found', () => {
    const list = new LinkedList();
    list.push(89);
    list.delete(103);

    expect(list.count()).toBe(1);
  });

  xtest('deletes only the first occurrence', () => {
    const list = new LinkedList();
    list.push(73);
    list.push(9);
    list.push(9);
    list.push(107);

    list.delete(9);

    expect(list.count()).toBe(3);

    expect(list.pop()).toBe(107);
    expect(list.pop()).toBe(9);
    expect(list.pop()).toBe(73);
  });
});
