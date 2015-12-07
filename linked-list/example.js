function Element(value) {
  return {value: value, next: null, prev: null}
}

export default class Deque {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    const result = this.head.value;
    this.head = this.head.prev;
    return result;
  }

  push(value) {
    if (this.head) {
      const newHead = new Element(value);
      newHead.prev = this.head;
      this.head.next = newHead;
      this.head = newHead;
    } else {
      this.head = new Element(value);
      this.tail = this.head;
    }
  }

  shift() {
    this.tail.next ? this.tail.next.prev = null : {};
    const value = this.tail.value;
    this.tail = this.tail.next;
    return value;
  }

  unshift(value) {
    if (this.tail) {
      const newTail = new Element(value);
      newTail.next = this.tail;
      this.tail.prev = newTail;
      this.tail = newTail;
    } else {
      this.tail = new Element(value);
      this.head = this.tail;
    }
  }

  count() {
    let count = 0,
      element = this.head;

    while (this.head && element) {
      count++;
      element = element.prev;
    }
    return count;
  }

  delete(value) {
    let element = this.head;
    while (element) {
      if (element.value === value) {
        if (this.head === element){
          this.head = null;
        }
        element.next ? element.next.prev = element.prev : {};
        element.prev ? element.prev.next = element.next : {};
        element = null;
      } else {
        element = element.prev;
      }
    }
  }
};
