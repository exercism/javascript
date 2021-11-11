import { tournamentTally } from './tournament';

describe('Tournament', () => {
  test('just the header if no input', () => {
    const tally = tournamentTally('');
    const expected = 'Team                           | MP |  W |  D |  L |  P';
    expect(tally).toEqual(expected);
  });
  test('a win is three points, a loss is zero points', () => {
    const tally = tournamentTally('Allegoric Alaskans;Blithering Badgers;win');
    const expected =
      'Team                           | MP |  W |  D |  L |  P\nAllegoric Alaskans             |  1 |  1 |  0 |  0 |  3\nBlithering Badgers             |  1 |  0 |  0 |  1 |  0';
    expect(tally).toEqual(expected);
  });
  test('a win can also be expressed as a loss', () => {
    const tally = tournamentTally('Blithering Badgers;Allegoric Alaskans;loss');
    const expected =
      'Team                           | MP |  W |  D |  L |  P\nAllegoric Alaskans             |  1 |  1 |  0 |  0 |  3\nBlithering Badgers             |  1 |  0 |  0 |  1 |  0';
    expect(tally).toEqual(expected);
  });
  test('a different team can win', () => {
    const tally = tournamentTally('Blithering Badgers;Allegoric Alaskans;win');
    const expected =
      'Team                           | MP |  W |  D |  L |  P\nBlithering Badgers             |  1 |  1 |  0 |  0 |  3\nAllegoric Alaskans             |  1 |  0 |  0 |  1 |  0';
    expect(tally).toEqual(expected);
  });
  test('a draw is one point each', () => {
    const tally = tournamentTally('Allegoric Alaskans;Blithering Badgers;draw');
    const expected =
      'Team                           | MP |  W |  D |  L |  P\nAllegoric Alaskans             |  1 |  0 |  1 |  0 |  1\nBlithering Badgers             |  1 |  0 |  1 |  0 |  1';
    expect(tally).toEqual(expected);
  });
  test('there can be more than one match', () => {
    const tally = tournamentTally(
      'Allegoric Alaskans;Blithering Badgers;win\nAllegoric Alaskans;Blithering Badgers;win'
    );
    const expected =
      'Team                           | MP |  W |  D |  L |  P\nAllegoric Alaskans             |  2 |  2 |  0 |  0 |  6\nBlithering Badgers             |  2 |  0 |  0 |  2 |  0';
    expect(tally).toEqual(expected);
  });
  test('there can be more than one winner', () => {
    const tally = tournamentTally(
      'Allegoric Alaskans;Blithering Badgers;loss\nAllegoric Alaskans;Blithering Badgers;win'
    );
    const expected =
      'Team                           | MP |  W |  D |  L |  P\nAllegoric Alaskans             |  2 |  1 |  0 |  1 |  3\nBlithering Badgers             |  2 |  1 |  0 |  1 |  3';
    expect(tally).toEqual(expected);
  });
  test('there can be more than two teams', () => {
    const tally = tournamentTally(
      'Allegoric Alaskans;Blithering Badgers;win\nBlithering Badgers;Courageous Californians;win\nCourageous Californians;Allegoric Alaskans;loss'
    );
    const expected =
      'Team                           | MP |  W |  D |  L |  P\nAllegoric Alaskans             |  2 |  2 |  0 |  0 |  6\nBlithering Badgers             |  2 |  1 |  0 |  1 |  3\nCourageous Californians        |  2 |  0 |  0 |  2 |  0';
    expect(tally).toEqual(expected);
  });
  test('typical input', () => {
    const tally = tournamentTally(
      'Allegoric Alaskans;Blithering Badgers;win\nDevastating Donkeys;Courageous Californians;draw\nDevastating Donkeys;Allegoric Alaskans;win\nCourageous Californians;Blithering Badgers;loss\nBlithering Badgers;Devastating Donkeys;loss\nAllegoric Alaskans;Courageous Californians;win'
    );
    const expected =
      'Team                           | MP |  W |  D |  L |  P\nDevastating Donkeys            |  3 |  2 |  1 |  0 |  7\nAllegoric Alaskans             |  3 |  2 |  0 |  1 |  6\nBlithering Badgers             |  3 |  1 |  0 |  2 |  3\nCourageous Californians        |  3 |  0 |  1 |  2 |  1';
    expect(tally).toEqual(expected);
  });
  test('incomplete competition (not all pairs have played)', () => {
    const tally = tournamentTally(
      'Allegoric Alaskans;Blithering Badgers;loss\nDevastating Donkeys;Allegoric Alaskans;loss\nCourageous Californians;Blithering Badgers;draw\nAllegoric Alaskans;Courageous Californians;win'
    );
    const expected =
      'Team                           | MP |  W |  D |  L |  P\nAllegoric Alaskans             |  3 |  2 |  0 |  1 |  6\nBlithering Badgers             |  2 |  1 |  1 |  0 |  4\nCourageous Californians        |  2 |  0 |  1 |  1 |  1\nDevastating Donkeys            |  1 |  0 |  0 |  1 |  0';
    expect(tally).toEqual(expected);
  });
  test('ties broken alphabetically', () => {
    const tally = tournamentTally(
      'Courageous Californians;Devastating Donkeys;win\nAllegoric Alaskans;Blithering Badgers;win\nDevastating Donkeys;Allegoric Alaskans;loss\nCourageous Californians;Blithering Badgers;win\nBlithering Badgers;Devastating Donkeys;draw\nAllegoric Alaskans;Courageous Californians;draw'
    );
    const expected =
      'Team                           | MP |  W |  D |  L |  P\nAllegoric Alaskans             |  3 |  2 |  1 |  0 |  7\nCourageous Californians        |  3 |  2 |  1 |  0 |  7\nBlithering Badgers             |  3 |  0 |  1 |  2 |  1\nDevastating Donkeys            |  3 |  0 |  1 |  2 |  1';
    expect(tally).toEqual(expected);
  });
  test('ensure points sorted numerically', () => {
    const tally = tournamentTally(
      'Devastating Donkeys;Blithering Badgers;win\nDevastating Donkeys;Blithering Badgers;win\nDevastating Donkeys;Blithering Badgers;win\nDevastating Donkeys;Blithering Badgers;win\nBlithering Badgers;Devastating Donkeys;win'
    );
    const expected =
      'Team                           | MP |  W |  D |  L |  P\nDevastating Donkeys            |  5 |  4 |  0 |  1 | 12\nBlithering Badgers             |  5 |  1 |  0 |  4 |  3';
    expect(tally).toEqual(expected);
  });
});
