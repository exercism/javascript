import { zebraPuzzle } from './zebra-puzzle';

describe('Zebra puzzle', () => {
  test('Solve the puzzle', () => {
    expect(zebraPuzzle()).toEqual({
      waterDriker: 'Norwegian',
      zebraOwner: 'Japanese',
    });
  });
});
