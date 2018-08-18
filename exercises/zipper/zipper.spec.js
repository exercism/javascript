var Zipper = require('./zipper');

// Tests adapted from `problem-specifications/zipper/canonical-data.json` @ v1.0.0

function bt(value, left, right) {
  return {
    value: value,
    left: left,
    right: right
  };
}

function leaf(value) {
  return bt(value, null, null);
}

describe('Zipper', function () {
  var t1 = bt(1, bt(2, null, leaf(3)), leaf(4));
  var t2 = bt(1, bt(5, null, leaf(3)), leaf(4));
  var t3 = bt(1, bt(2, leaf(5), leaf(3)), leaf(4));
  var t4 = bt(1, leaf(2), leaf(4));
  var t5 = bt(1, bt(2, null, leaf(3)), bt(6, leaf(7), leaf(8)));
  var t6 = bt(1, bt(2, null, leaf(5)), leaf(4));
  var zipper;

  beforeEach(function () {
    zipper = Zipper.fromTree(t1);
  });

  it('data is retained', function () {
    expect(zipper.toTree(t1)).toEqual(t1);
  });

  xit('left, right and value', function () {
    expect(zipper.left().right().value()).toEqual(3);
  });

  xit('dead end', function () {
    expect(zipper.left().left()).toBe(null);
  });

  xit('tree from deep focus', function () {
    expect(zipper.left().right().toTree()).toEqual(t1);
  });

  xit('traversing up from top', function () {
    expect(zipper.up()).toEqual(null);
  });

  xit('left, right and up', function () {
    expect(zipper.left().up().right().up().left().right().value()).toEqual(3);
  });

  xit('setValue', function () {
    expect(zipper.left().setValue(5).toTree()).toEqual(t2);
  });

  xit('setValue after traversing up', function () {
    expect(zipper.left().right().up().setValue(5).toTree()).toEqual(t2);
  });

  xit('setLeft with leaf', function () {
    expect(zipper.left().setLeft(leaf(5)).toTree()).toEqual(t3);
  });

  xit('setRight with null', function () {
    expect(zipper.left().setRight(null).toTree()).toEqual(t4);
  });

  xit('setRight with subtree', function () {
    expect(zipper.setRight(bt(6, leaf(7), leaf(8))).toTree()).toEqual(t5);
  });

  xit('setValue on deep focus', function () {
    expect(zipper.left().right().setValue(5).toTree()).toEqual(t6);
  });
});
