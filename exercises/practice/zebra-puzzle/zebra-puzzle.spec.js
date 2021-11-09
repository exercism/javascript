import { ZebraPuzzle } from './zebra-puzzle';

describe('Zebra puzzle', () => {
  test('should solve the water driker', () => {
    const puzzle = new ZebraPuzzle();
    expect(puzzle.waterDrinker()).toEqual('Norwegian');
  });
  test('should solve the zebra owner', () => {
    const puzzle = new ZebraPuzzle();
    expect(puzzle.zebraOwner()).toEqual('Japanese');
  });
});
