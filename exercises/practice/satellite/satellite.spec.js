import { treeFromTraversals } from './satellite';

describe('Satellite', () => {
  test('Empty tree', () => {
    expect(treeFromTraversals([], [])).toEqual({});
  });

  test('Tree with one item', () => {
    const expected = { value: 'a', left: {}, right: {} };
    expect(treeFromTraversals(['a'], ['a'])).toEqual(expected);
  });

  test('Tree with many items', () => {
    const preorder = ['a', 'i', 'x', 'f', 'r'];
    const inorder = ['i', 'a', 'f', 'x', 'r'];
    const expected = {
      value: 'a',
      left: { value: 'i', left: {}, right: {} },
      right: {
        value: 'x',
        left: { value: 'f', left: {}, right: {} },
        right: { value: 'r', left: {}, right: {} },
      },
    };
    expect(treeFromTraversals(preorder, inorder)).toEqual(expected);
  });

  test('Reject traversals of different length', () => {
    const preorder = ['a', 'b'];
    const inorder = ['b', 'a', 'r'];
    expect(() => {
      treeFromTraversals(preorder, inorder);
    }).toThrow(new Error('traversals must have the same length'));
  });

  test('Reject inconsistent traversals of same length', () => {
    const preorder = ['x', 'y', 'z'];
    const inorder = ['a', 'b', 'c'];
    expect(() => {
      treeFromTraversals(preorder, inorder);
    }).toThrow(new Error('traversals must have the same elements'));
  });

  test('Reject traversals with repeated items', () => {
    const preorder = ['a', 'b', 'a'];
    const inorder = ['b', 'a', 'a'];
    expect(() => {
      treeFromTraversals(preorder, inorder);
    }).toThrow(new Error('traversals must contain unique items'));
  });
});
