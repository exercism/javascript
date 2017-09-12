export class ElementValueRequiredException extends Error {}
export class ElementNextNotInstanceException extends Error {}

export class Element {
  constructor(value, next) {
    if (value === undefined) {
      throw new ElementValueRequiredException();
    }

    if (next !== undefined && !(next instanceof Element)) {
      throw new ElementNextNotInstanceException();
    }

    this.value = value;
    this.next = next;
  }
}

export class List {
  static fromArray(array) {
    const list = new List();
    array.forEach(item => list.push(new Element(item)));

    return list;
  }

  push(value) {
    const newEl = (value instanceof Element)
      ? value
      : new Element(value);

    if (!this.head) {
      this.head = newEl;
      return;
    }

    let lastEl = this.head;
    while (lastEl.next) {
      lastEl = lastEl.next;
    }

    lastEl.next = newEl;
  }

  unshift(value) {
    const newEl = (value instanceof Element)
      ? value
      : new Element(value);

    newEl.next = this.head;
    this.head = newEl;
  }

  shift() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  pop() {
    if (!this.head) {
      return;
    }

    let penultEl;
    let lastEl = this.head;

    while (lastEl.next) {
      penultEl = lastEl;
      lastEl = lastEl.next;
    }

    if (!penultEl) {
      this.head = undefined;
    } else {
      penultEl.next = undefined;
    }
  }

  reverse() {
    if (!this.head) {
      return;
    }

    let current;
    let previous;

    while (this.head) {
      current = this.head;
      this.shift();
      current.next = previous;
      previous = current;
    }

    this.head = previous;
  }

  toArray() {
    const array = [];
    let current = this.head;

    while (current) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  }
}
