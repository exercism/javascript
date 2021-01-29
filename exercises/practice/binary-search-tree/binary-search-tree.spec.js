import { BinarySearchTree } from './binary-search-tree';

function recordAllData(bst) {
  const out = [];

  bst.each((data) => out.push(data));

  return out;
}

describe('BinarySearchTree', () => {
  test('data is retained', () => {
    expect(new BinarySearchTree(4).data).toEqual(4);
  });

  describe('insert data at proper node', () => {
    xtest('smaller number at left node', () => {
      const four = new BinarySearchTree(4);
      four.insert(2);

      expect(four.data).toEqual(4);
      expect(four.left.data).toEqual(2);
    });

    xtest('same number at left node"', () => {
      const four = new BinarySearchTree(4);
      four.insert(4);

      expect(four.data).toEqual(4);
      expect(four.left.data).toEqual(4);
    });

    xtest('greater number at right node', () => {
      const four = new BinarySearchTree(4);
      four.insert(5);

      expect(four.data).toEqual(4);
      expect(four.right.data).toEqual(5);
    });
  });

  xtest('can create complex tree', () => {
    const four = new BinarySearchTree(4);
    four.insert(2);
    four.insert(6);
    four.insert(1);
    four.insert(3);
    four.insert(5);
    four.insert(7);

    expect(four.data).toEqual(4);
    expect(four.left.data).toEqual(2);
    expect(four.left.left.data).toEqual(1);
    expect(four.left.right.data).toEqual(3);
    expect(four.right.data).toEqual(6);
    expect(four.right.left.data).toEqual(5);
    expect(four.right.right.data).toEqual(7);
  });

  describe('can sort data', () => {
    xtest('can sort single number', () => {
      expect(recordAllData(new BinarySearchTree(2))).toEqual([2]);
    });

    xtest('can sort if second number is smaller than first', () => {
      const four = new BinarySearchTree(2);
      four.insert(1);

      expect(recordAllData(four)).toEqual([1, 2]);
    });

    xtest('can sort if second number is same as first', () => {
      const four = new BinarySearchTree(2);
      four.insert(2);

      expect(recordAllData(four)).toEqual([2, 2]);
    });

    xtest('can sort if second number is greater than first', () => {
      const four = new BinarySearchTree(2);
      four.insert(3);

      expect(recordAllData(four)).toEqual([2, 3]);
    });

    xtest('can sort complex tree', () => {
      const four = new BinarySearchTree(2);
      four.insert(1);
      four.insert(3);
      four.insert(6);
      four.insert(7);
      four.insert(5);

      expect(recordAllData(four)).toEqual([1, 2, 3, 5, 6, 7]);
    });
  });
});
