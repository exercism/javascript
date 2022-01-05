import { treeFromTraversals } from './satellite';

describe('Satellite', () => {
  test('Empty tree', () => {
    expect(treeFromTraversals([], [])).toEqual({});
  });

  test('Tree with one item', () => {
    const expected = { v: 'a', l: {}, r: {} };
    expect(treeFromTraversals(['a'], ['a'])).toEqual(expected);
  });

  test('Tree with many items', () => {
    const preorder = ['a', 'i', 'x', 'f', 'r'];
    const inorder = ['i', 'a', 'f', 'x', 'r'];
    const expected = {
      v: 'a',
      l: { v: 'i', l: {}, r: {} },
      r: { v: 'x', l: { v: 'f', l: {}, r: {} }, r: { v: 'r', l: {}, r: {} } },
    };
    expect(treeFromTraversals(preorder, inorder)).toEqual(expected);
  });

  test('Reject traversals of different length', () => {
    const preorder = ['a', 'b'];
    const inorder = ['b', 'a', 'r'];
    const expected = { error: 'traversals must have the same length' };
    expect(treeFromTraversals(preorder, inorder)).toEqual(expected);
  });

  test('Reject inconsistent traversals of same length', () => {
    const preorder = ['x', 'y', 'z'];
    const inorder = ['a', 'b', 'c'];
    const expected = { error: 'traversals must have the same elements' };
    expect(treeFromTraversals(preorder, inorder)).toEqual(expected);
  });

  test('Reject traversals with repeated items', () => {
    const preorder = ['a', 'b', 'a'];
    const inorder = ['b', 'a', 'a'];
    const expected = { error: 'traversals must contain unique items' };
    expect(treeFromTraversals(preorder, inorder)).toEqual(expected);
  });
});
