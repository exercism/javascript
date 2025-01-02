import { describe, expect, test, xtest } from '@jest/globals';
import { ZebraPuzzle } from './zebra-puzzle';

describe('Zebra puzzle', () => {
  test('resident who drinks water', () => {
    const puzzle = new ZebraPuzzle();
    expect(puzzle.waterDrinker()).toEqual('Norwegian');
  });
  xtest('resident who owns zebra', () => {
    const puzzle = new ZebraPuzzle();
    expect(puzzle.zebraOwner()).toEqual('Japanese');
  });
});
