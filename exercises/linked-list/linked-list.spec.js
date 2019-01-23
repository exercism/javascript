import { LinkedList } from './linked-list';

describe('LinkedList', () => {
  test('add/extract elements to the end of the list with push/pop', () => {
    const list = new LinkedList();
    list.push(10);
    list.push(20);
    expect(list.pop()).toBe(20);
    expect(list.pop()).toBe(10);
  });
  xtest('extract elements from the beginning of the list with shift', () => {
    const list = new LinkedList();
    list.push(10);
    list.push(20);
    expect(list.shift()).toBe(10);
    expect(list.shift()).toBe(20);
  });
  xtest('add/extract elements from the beginning of the list with unshift/shift', () => {
    const list = new LinkedList();
    list.unshift(10);
    list.unshift(20);
    expect(list.shift()).toBe(20);
    expect(list.shift()).toBe(10);
  });
  xtest('unshift/pop', () => {
    const list = new LinkedList();
    list.unshift(10);
    list.unshift(20);
    expect(list.pop()).toBe(10);
    expect(list.pop()).toBe(20);
  });
  xtest('example', () => {
    const list = new LinkedList();
    list.push(10);
    list.push(20);
    expect(list.pop()).toBe(20);
    list.push(30);
    expect(list.shift()).toBe(10);
    list.unshift(40);
    list.push(50);
    expect(list.shift()).toBe(40);
    expect(list.pop()).toBe(50);
    expect(list.shift()).toBe(30);
  });
  xtest('can count its elements', () => {
    const list = new LinkedList();
    expect(list.count()).toBe(0);
    list.push(10);
    expect(list.count()).toBe(1);
    list.push(20);
    expect(list.count()).toBe(2);
  });
  xtest('sets head/tail after popping last element', () => {
    const list = new LinkedList();
    list.push(10);
    list.pop();
    list.unshift(20);
    expect(list.count()).toBe(1);
    expect(list.pop()).toBe(20);
  });
  xtest('sets head/tail after shifting last element', () => {
    const list = new LinkedList();
    list.unshift(10);
    list.shift();
    list.push(20);
    expect(list.count()).toBe(1);
    expect(list.shift()).toBe(20);
  });
  xtest('deletes the element with the specified value from the list', () => {
    const list = new LinkedList();
    list.push(10);
    list.push(20);
    list.push(30);
    list.delete(20);
    expect(list.count()).toBe(2);
    expect(list.pop()).toBe(30);
    expect(list.shift()).toBe(10);
  });
  xtest('deletes the only element', () => {
    const list = new LinkedList();
    list.push(10);
    list.delete(10);
    expect(list.count()).toBe(0);
  });
  xtest('deletes the first of two elements', () => {
    const list = new LinkedList();
    list.push(10);
    list.push(20);
    list.delete(10);
    expect(list.count()).toBe(1);
    expect(list.pop()).toBe(20);
  });
  xtest('deletes the second of two elements', () => {
    const list = new LinkedList();
    list.push(10);
    list.push(20);
    list.delete(20);
    expect(list.count()).toBe(1);
    expect(list.pop()).toBe(10);
  });
  xtest('delete does not modify the list if the element is not found', () => {
    const list = new LinkedList();
    list.push(10);
    list.delete(20);
    expect(list.count()).toBe(1);
  });
});
