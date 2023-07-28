const Null = {
  get value() {
    return undefined;
  },
  get next() {
    return this;
  },
  get values() {
    return [];
  },

  get() {
    return this.value;
  },
  push(item) {
    return new Cons(item, this);
  },
  length() {
    return 0;
  },
  append(other) {
    return other;
  },
  concat() {
    return this;
  },
  forEach() {
    /* done */
  },
  foldl(_, initial) {
    return initial;
  },
  foldr(_, initial) {
    return initial;
  },
  filter() {
    return Null;
  },
  reverse() {
    return this;
  },
  map() {
    return this;
  },
};

class Cons {
  static fromArray([head, ...tail]) {
    if (head === undefined) {
      return Null;
    }

    return new Cons(head, Cons.fromArray(tail || []));
  }

  constructor(value, next = Null) {
    this.value = value;
    this.next = next;
  }

  get values() {
    return [this.value, ...this.next.values];
  }

  get(i) {
    return i === 0 ? this.value : this.next.get(i - 1);
  }

  push(item) {
    this.next = this.next.push(item);
    return this;
  }

  length() {
    return 1 + this.next.length();
  }

  append(other) {
    return other.foldl((result, item) => result.push(item), this);
  }

  concat(others) {
    return others.foldl((result, other) => result.append(other), this);
  }

  foldl(callback, initial = undefined) {
    return this.next.foldl(callback, callback(initial, this.value));
  }

  forEach(callback) {
    this.foldl((_, item) => callback(item));
  }

  foldr(callback, initial = undefined) {
    return callback(this.next.foldr(callback, initial), this.value);
  }

  filter(predicate) {
    return this.foldl(
      (result, item) => (predicate(item) && result.push(item)) || result,
      Null,
    );
  }

  map(expression) {
    return this.foldl((result, item) => result.push(expression(item)), Null);
  }

  reverse() {
    return this.next.reverse().push(this.value);
  }
}

export class List {
  constructor(values = []) {
    return Cons.fromArray(values);
  }
}
