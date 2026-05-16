import { describe, expect, test, xtest } from '@jest/globals';
import { treeFromTraversals } from './satellite';

describe('Satellite', () => {
  test('Empty tree', () => {
    expect(treeFromTraversals([], [])).toEqual({});
  });

  xtest('Tree with one item', () => {
    const expected = { value: 'a', left: {}, right: {} };
    expect(treeFromTraversals(['a'], ['a'])).toEqual(expected);
  });

  xtest('Tree with many items', () => {
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

  xtest('Reject traversals of different length', () => {
    const preorder = ['a', 'b'];
    const inorder = ['b', 'a', 'r'];
    expect(() => {
      treeFromTraversals(preorder, inorder);
    }).toThrow(new Error('traversals must have the same length'));
  });

  xtest('Reject inconsistent traversals of same length', () => {
    const preorder = ['x', 'y', 'z'];
    const inorder = ['a', 'b', 'c'];
    expect(() => {
      treeFromTraversals(preorder, inorder);
    }).toThrow(new Error('traversals must have the same elements'));
  });

  xtest('Reject traversals with repeated items', () => {
    const preorder = ['a', 'b', 'a'];
    const inorder = ['b', 'a', 'a'];
    expect(() => {
      treeFromTraversals(preorder, inorder);
    }).toThrow(new Error('traversals must contain unique items'));
  });

  xtest('A degenerate binary tree', () => {
    const preorder = ['a', 'b', 'c', 'd'];
    const inorder = ['d', 'c', 'b', 'a'];
    const expected = {
      value: 'a',
      left: {
        value: 'b',
        left: {
          value: 'c',
          left: {
            value: 'd',
            left: {},
            right: {},
          },
          right: {},
        },
        right: {},
      },
      right: {},
    };
    expect(treeFromTraversals(preorder, inorder)).toEqual(expected);
  });

  xtest('Another degenerate binary tree', () => {
    const preorder = ['a', 'b', 'c', 'd'];
    const inorder = ['a', 'b', 'c', 'd'];
    const expected = {
      value: 'a',
      left: {},
      right: {
        value: 'b',
        left: {},
        right: {
          value: 'c',
          left: {},
          right: {
            value: 'd',
            left: {},
            right: {},
          },
        },
      },
    };
    expect(treeFromTraversals(preorder, inorder)).toEqual(expected);
  });

  xtest('Tree with many more items', () => {
    const preorder = ['a', 'b', 'd', 'g', 'h', 'c', 'e', 'f', 'i'];
    const inorder = ['g', 'd', 'h', 'b', 'a', 'e', 'c', 'i', 'f'];
    const expected = {
      value: 'a',
      left: {
        value: 'b',
        left: {
          value: 'd',
          left: {
            value: 'g',
            left: {},
            right: {},
          },
          right: {
            value: 'h',
            left: {},
            right: {},
          },
        },
        right: {},
      },
      right: {
        value: 'c',
        left: {
          value: 'e',
          left: {},
          right: {},
        },
        right: {
          value: 'f',
          left: {
            value: 'i',
            left: {},
            right: {},
          },
          right: {},
        },
      },
    };
    expect(treeFromTraversals(preorder, inorder)).toEqual(expected);
  });
});
