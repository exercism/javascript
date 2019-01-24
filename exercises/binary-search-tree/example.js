export class BinarySearchTree {
  constructor(data) {
    this.data = data;
    this.left = undefined;
    this.right = undefined;
  }

  insert(value) {
    if (value <= this.data) {
      this.insertLeft(value);
    } else {
      this.insertRight(value);
    }

    return this;
  }

  insertLeft(value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }

    return this;
  }

  insertRight(value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }

    return this;
  }

  each(fn) {
    if (this.left) {
      this.left.each(fn);
    }
    fn.call(this, this.data);
    if (this.right) {
      this.right.each(fn);
    }
  }
}
