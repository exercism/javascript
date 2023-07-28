function fromTrail(tree, last) {
  if (last[0] === 'left') {
    return {
      value: last[1],
      left: tree,
      right: last[2],
    };
  }
  return {
    value: last[1],
    left: last[2],
    right: tree,
  };
}

function rebuildTree(tree, trail) {
  if (trail.length === 0) return tree;

  const last = trail[0];
  return rebuildTree(fromTrail(tree, last), trail.slice(1));
}

export class Zipper {
  constructor(tree, trail) {
    this.tree = tree;
    this.trail = trail;
  }

  static fromTree(tree) {
    return new Zipper(tree, []);
  }

  toTree() {
    return rebuildTree(this.tree, this.trail);
  }

  value() {
    return this.tree.value;
  }

  left() {
    if (!this.tree.left) return null;

    return new Zipper(
      this.tree.left,
      [['left', this.tree.value, this.tree.right]].concat(this.trail),
    );
  }

  right() {
    if (!this.tree.right) return null;

    return new Zipper(
      this.tree.right,
      [['right', this.tree.value, this.tree.left]].concat(this.trail),
    );
  }

  up() {
    if (this.trail.length === 0) return null;

    const last = this.trail[0];
    return new Zipper(fromTrail(this.tree, last), this.trail.slice(1));
  }

  setValue(value) {
    return new Zipper(
      { value, left: this.tree.left, right: this.tree.right },
      this.trail,
    );
  }

  setLeft(left) {
    return new Zipper(
      { value: this.tree.value, left, right: this.tree.right },
      this.trail,
    );
  }

  setRight(right) {
    return new Zipper(
      { value: this.tree.value, left: this.tree.left, right },
      this.trail,
    );
  }
}
