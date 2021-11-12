import { ZebraPuzzle } from './zebra-puzzle';

describe('Zebra puzzle', () => {
  test('resident who drinks water', () => {
    const puzzle = new ZebraPuzzle();
    expect(puzzle.waterDrinker()).toEqual('Norwegian');
  });
  test('resident who owns zebra', () => {
    const puzzle = new ZebraPuzzle();
    expect(puzzle.zebraOwner()).toEqual('Japanese');
  });
});
