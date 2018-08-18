'use strict';

function fromTrail(tree, last) {
  if (last[0] === 'left') {
    return {
      value: last[1],
      left: tree,
      right: last[2]
    };
  }
  return {
    value: last[1],
    left: last[2],
    right: tree
  };
}

function rebuildTree(tree, trail) {
  if (trail.length === 0) return tree;

  var last = trail[0];
  return rebuildTree(fromTrail(tree, last), trail.slice(1));
}

var Zipper = function (tree, trail) {
  this.tree = tree;
  this.trail = trail;
};

Zipper.fromTree = function (tree) {
  return new Zipper(tree, []);
};

Zipper.prototype.toTree = function () {
  return rebuildTree(this.tree, this.trail);
};

Zipper.prototype.value = function () {
  return this.tree.value;
};

Zipper.prototype.left = function () {
  if (!this.tree.left) return null;

  return new Zipper(
    this.tree.left,
    [['left', this.tree.value, this.tree.right]].concat(this.trail)
  );
};

Zipper.prototype.right = function () {
  if (!this.tree.right) return null;

  return new Zipper(
    this.tree.right,
    [['right', this.tree.value, this.tree.left]].concat(this.trail)
  );
};

Zipper.prototype.up = function () {
  if (this.trail.length === 0) return null;

  var last = this.trail[0];
  return new Zipper(fromTrail(this.tree, last), this.trail.slice(1));
};

Zipper.prototype.setValue = function (value) {
  return new Zipper(
    {
      value: value,
      left: this.tree.left,
      right: this.tree.right
    },
    this.trail
  );
};

Zipper.prototype.setLeft = function (left) {
  return new Zipper(
    {
      value: this.tree.value,
      left: left,
      right: this.tree.right
    },
    this.trail
  );
};

Zipper.prototype.setRight = function (right) {
  return new Zipper(
    {
      value: this.tree.value,
      left: this.tree.left,
      right: right
    },
    this.trail
  );
};

module.exports = Zipper;
