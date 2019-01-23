function Element(value) {
  return { value, next: null, prev: null };
}

export class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    const { value } = this.head;
    if (this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.tail = null;
      this.head = this.tail;
    }

    return value;
  }

  push(value) {
    if (this.head) {
      const newHead = new Element(value);
      newHead.next = this.head;
      this.head.prev = newHead;
      this.head = newHead;
    } else {
      this.head = new Element(value);
      this.tail = this.head;
    }
  }

  shift() {
    if (!this.tail) {
      return undefined;
    }

    const { value } = this.tail;
    if (this.tail.prev) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      this.tail = null;
      this.head = this.tail;
    }

    return value;
  }

  unshift(value) {
    if (this.tail) {
      const newTail = new Element(value);
      newTail.prev = this.tail;
      this.tail.next = newTail;
      this.tail = newTail;
    } else {
      this.tail = new Element(value);
      this.head = this.tail;
    }
  }

  count() {
    let count = 0;
    let element = this.head;

    while (this.head && element) {
      count += 1;
      element = element.next;
    }
    return count;
  }

  delete(value) {
    let element = this.head;
    while (element) {
      if (element.value === value) {
        if (element.next) {
          element.next.prev = element.prev;
        } else {
          this.tail = this.tail.prev;
        }
        if (element.prev) {
          element.prev.next = element.next;
        } else {
          this.head = this.head.next;
        }
        element = null;
      } else {
        element = element.next;
      }
    }
  }
}
