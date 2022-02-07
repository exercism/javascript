import { tournamentTally } from './tournament';

describe('Tournament', () => {
  test('just the header if no input', () => {
    const tally = tournamentTally('');
    const expected = 'Team                           | MP |  W |  D |  L |  P';
    expect(tally).toEqual(expected);
  });
  xtest('a win is three points, a loss is zero points', () => {
    const tally = tournamentTally('Allegoric Alaskans;Blithering Badgers;win');
    const expected =
      'Team                           | MP |  W |  D |  L |  P\n' +
      'Allegoric Alaskans             |  1 |  1 |  0 |  0 |  3\n' +
      'Blithering Badgers             |  1 |  0 |  0 |  1 |  0';
    expect(tally).toEqual(expected);
  });
  xtest('a win can also be expressed as a loss', () => {
    const tally = tournamentTally('Blithering Badgers;Allegoric Alaskans;loss');
    const expected =
      'Team                           | MP |  W |  D |  L |  P\n' +
      'Allegoric Alaskans             |  1 |  1 |  0 |  0 |  3\n' +
      'Blithering Badgers             |  1 |  0 |  0 |  1 |  0';
    expect(tally).toEqual(expected);
  });
  xtest('a different team can win', () => {
    const tally = tournamentTally('Blithering Badgers;Allegoric Alaskans;win');
    const expected =
      'Team                           | MP |  W |  D |  L |  P\n' +
      'Blithering Badgers             |  1 |  1 |  0 |  0 |  3\n' +
      'Allegoric Alaskans             |  1 |  0 |  0 |  1 |  0';
    expect(tally).toEqual(expected);
  });
  xtest('a draw is one point each', () => {
    const tally = tournamentTally('Allegoric Alaskans;Blithering Badgers;draw');
    const expected =
      'Team                           | MP |  W |  D |  L |  P\n' +
      'Allegoric Alaskans             |  1 |  0 |  1 |  0 |  1\n' +
      'Blithering Badgers             |  1 |  0 |  1 |  0 |  1';
    expect(tally).toEqual(expected);
  });
  xtest('there can be more than one match', () => {
    const input =
      'Allegoric Alaskans;Blithering Badgers;win\n' +
      'Allegoric Alaskans;Blithering Badgers;win';
    const tally = tournamentTally(input);
    const expected =
      'Team                           | MP |  W |  D |  L |  P\n' +
      'Allegoric Alaskans             |  2 |  2 |  0 |  0 |  6\n' +
      'Blithering Badgers             |  2 |  0 |  0 |  2 |  0';
    expect(tally).toEqual(expected);
  });
  xtest('there can be more than one winner', () => {
    const input =
      'Allegoric Alaskans;Blithering Badgers;loss\n' +
      'Allegoric Alaskans;Blithering Badgers;win';
    const tally = tournamentTally(input);
    const expected =
      'Team                           | MP |  W |  D |  L |  P\n' +
      'Allegoric Alaskans             |  2 |  1 |  0 |  1 |  3\n' +
      'Blithering Badgers             |  2 |  1 |  0 |  1 |  3';
    expect(tally).toEqual(expected);
  });
  xtest('there can be more than two teams', () => {
    const input =
      'Allegoric Alaskans;Blithering Badgers;win\n' +
      'Blithering Badgers;Courageous Californians;win\n' +
      'Courageous Californians;Allegoric Alaskans;loss';
    const tally = tournamentTally(input);
    const expected =
      'Team                           | MP |  W |  D |  L |  P\n' +
      'Allegoric Alaskans             |  2 |  2 |  0 |  0 |  6\n' +
      'Blithering Badgers             |  2 |  1 |  0 |  1 |  3\n' +
      'Courageous Californians        |  2 |  0 |  0 |  2 |  0';
    expect(tally).toEqual(expected);
  });
  xtest('typical input', () => {
    const input =
      'Allegoric Alaskans;Blithering Badgers;win\n' +
      'Devastating Donkeys;Courageous Californians;draw\n' +
      'Devastating Donkeys;Allegoric Alaskans;win\n' +
      'Courageous Californians;Blithering Badgers;loss\n' +
      'Blithering Badgers;Devastating Donkeys;loss\n' +
      'Allegoric Alaskans;Courageous Californians;win';
    const tally = tournamentTally(input);
    const expected =
      'Team                           | MP |  W |  D |  L |  P\n' +
      'Devastating Donkeys            |  3 |  2 |  1 |  0 |  7\n' +
      'Allegoric Alaskans             |  3 |  2 |  0 |  1 |  6\n' +
      'Blithering Badgers             |  3 |  1 |  0 |  2 |  3\n' +
      'Courageous Californians        |  3 |  0 |  1 |  2 |  1';
    expect(tally).toEqual(expected);
  });
  xtest('incomplete competition (not all pairs have played)', () => {
    const input =
      'Allegoric Alaskans;Blithering Badgers;loss\n' +
      'Devastating Donkeys;Allegoric Alaskans;loss\n' +
      'Courageous Californians;Blithering Badgers;draw\n' +
      'Allegoric Alaskans;Courageous Californians;win';
    const tally = tournamentTally(input);
    const expected =
      'Team                           | MP |  W |  D |  L |  P\n' +
      'Allegoric Alaskans             |  3 |  2 |  0 |  1 |  6\n' +
      'Blithering Badgers             |  2 |  1 |  1 |  0 |  4\n' +
      'Courageous Californians        |  2 |  0 |  1 |  1 |  1\n' +
      'Devastating Donkeys            |  1 |  0 |  0 |  1 |  0';
    expect(tally).toEqual(expected);
  });
  xtest('ties broken alphabetically', () => {
    const input =
      'Courageous Californians;Devastating Donkeys;win\n' +
      'Allegoric Alaskans;Blithering Badgers;win\n' +
      'Devastating Donkeys;Allegoric Alaskans;loss\n' +
      'Courageous Californians;Blithering Badgers;win\n' +
      'Blithering Badgers;Devastating Donkeys;draw\n' +
      'Allegoric Alaskans;Courageous Californians;draw';
    const tally = tournamentTally(input);
    const expected =
      'Team                           | MP |  W |  D |  L |  P\n' +
      'Allegoric Alaskans             |  3 |  2 |  1 |  0 |  7\n' +
      'Courageous Californians        |  3 |  2 |  1 |  0 |  7\n' +
      'Blithering Badgers             |  3 |  0 |  1 |  2 |  1\n' +
      'Devastating Donkeys            |  3 |  0 |  1 |  2 |  1';
    expect(tally).toEqual(expected);
  });
  xtest('ensure points sorted numerically', () => {
    const input =
      'Devastating Donkeys;Blithering Badgers;win\n' +
      'Devastating Donkeys;Blithering Badgers;win\n' +
      'Devastating Donkeys;Blithering Badgers;win\n' +
      'Devastating Donkeys;Blithering Badgers;win\n' +
      'Blithering Badgers;Devastating Donkeys;win';
    const tally = tournamentTally(input);
    const expected =
      'Team                           | MP |  W |  D |  L |  P\n' +
      'Devastating Donkeys            |  5 |  4 |  0 |  1 | 12\n' +
      'Blithering Badgers             |  5 |  1 |  0 |  4 |  3';
    expect(tally).toEqual(expected);
  });
});
