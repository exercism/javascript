export class CustomSet {
  constructor(data = []) {
    this.data = {};
    data.forEach((el) => {
      this.add(el);
    });
  }

  add(el) {
    this.data[el] = el;
    return this;
  }

  delete(el) {
    delete this.data[el];
    return this;
  }

  size() {
    return Object.keys(this.data).length;
  }

  empty() {
    return this.size() === 0;
  }

  contains(el) {
    return this.data[el] !== undefined;
  }

  eql(other) {
    return this.size() === other.size() && this.difference(other).size() === 0;
  }

  difference(other) {
    return new CustomSet(
      Object.keys(this.data).filter((el) => other.data[el] === undefined)
    );
  }

  disjoint(other) {
    return this.size === 0 || this.difference(other).size() === this.size();
  }

  intersection(other) {
    return this.difference(this.difference(other));
  }

  union(other) {
    return new CustomSet(this.toList().concat(other.toList()));
  }

  subset(other) {
    return this.eql(this.intersection(other));
  }

  toList() {
    return Object.values(this.data);
  }
}
