var Bst = require('./binary-search-tree');

function recordAllData(bst) {
  var out = [];

  bst.each(function (data) { out.push(data); });

  return out;
}

describe('BinarySearchTree', function () {
  it('data is retained', function () {
    expect(new Bst(4).data).toEqual(4);
  });

  xit('inserting less', function () {
    var four;

    four = new Bst(4);
    four.insert(2);

    expect(four.data).toEqual(4);
    expect(four.left.data).toEqual(2);
  });

  xit('inserting same', function () {
    var four;

    four = new Bst(4);
    four.insert(4);

    expect(four.data).toEqual(4);
    expect(four.left.data).toEqual(4);
  });

  xit('inserting right', function () {
    var four;

    four = new Bst(4);
    four.insert(5);

    expect(four.data).toEqual(4);
    expect(four.right.data).toEqual(5);
  });

  xit('complex tree', function () {
    var four;

    four = new Bst(4);
    four.insert(2);
    four.insert(6);
    four.insert(1);
    four.insert(3);
    four.insert(7);
    four.insert(5);

    expect(four.data).toEqual(4);
    expect(four.left.data).toEqual(2);
    expect(four.left.left.data).toEqual(1);
    expect(four.left.right.data).toEqual(3);
    expect(four.right.data).toEqual(6);
    expect(four.right.left.data).toEqual(5);
    expect(four.right.right.data).toEqual(7);
  });

  xit('iterating one element', function () {
    expect(recordAllData(new Bst(4))).toEqual([4]);
  });

  xit('iterating over smaller element', function () {
    var four;

    four = new Bst(4);
    four.insert(2);

    expect(recordAllData(four)).toEqual([2, 4]);
  });

  xit('iterating over larger element', function () {
    var four;

    four = new Bst(4);
    four.insert(5);

    expect(recordAllData(four)).toEqual([4, 5]);
  });

  xit('iterating over complex tree', function () {
    var four;

    four = new Bst(4);
    four.insert(2);
    four.insert(1);
    four.insert(3);
    four.insert(6);
    four.insert(7);
    four.insert(5);

    expect(recordAllData(four)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
