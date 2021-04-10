import { count } from './rectangles';

describe('Rectangles', () => {
  test('no rows', () => {
    const expected = 0;
    const actual = count([]);

    expect(actual).toEqual(expected);
  });

  xtest('no columns', () => {
    const expected = 0;
    const actual = count(['']);

    expect(actual).toEqual(expected);
  });

  xtest('no rectangles', () => {
    const expected = 0;
    const actual = count([' ']);

    expect(actual).toEqual(expected);
  });

  xtest('one rectangle', () => {
    const expected = 1;
    const actual = count(['+-+', '| |', '+-+']);

    expect(actual).toEqual(expected);
  });

  xtest('two rectangles without shared parts', () => {
    const expected = 2;
    const actual = count(['  +-+', '  | |', '+-+-+', '| |  ', '+-+  ']);

    expect(actual).toEqual(expected);
  });

  xtest('five rectangles with shared parts', () => {
    const expected = 5;
    const actual = count(['  +-+', '  | |', '+-+-+', '| | |', '+-+-+']);

    expect(actual).toEqual(expected);
  });

  xtest('rectangle of height 1 is counted', () => {
    const expected = 1;
    const actual = count(['+--+', '+--+']);

    expect(actual).toEqual(expected);
  });

  xtest('rectangle of width 1 is counted', () => {
    const expected = 1;
    const actual = count(['++', '||', '++']);

    expect(actual).toEqual(expected);
  });

  xtest('1x1 square is counted', () => {
    const expected = 1;
    const actual = count(['++', '++']);

    expect(actual).toEqual(expected);
  });

  xtest('only complete rectangles are counted', () => {
    const expected = 1;
    const actual = count(['  +-+', '    |', '+-+-+', '| | -', '+-+-+']);

    expect(actual).toEqual(expected);
  });

  xtest('rectangles can be of different sizes', () => {
    const expected = 3;
    const actual = count([
      '+------+----+',
      '|      |    |',
      '+---+--+    |',
      '|   |       |',
      '+---+-------+',
    ]);

    expect(actual).toEqual(expected);
  });

  xtest('corner is required for a rectangle to be complete', () => {
    const expected = 2;
    const actual = count([
      '+------+----+',
      '|      |    |',
      '+------+    |',
      '|   |       |',
      '+---+-------+',
    ]);

    expect(actual).toEqual(expected);
  });

  xtest('large input with many rectangles', () => {
    const expected = 60;
    const actual = count([
      '+---+--+----+',
      '|   +--+----+',
      '+---+--+    |',
      '|   +--+----+',
      '+---+--+--+-+',
      '+---+--+--+-+',
      '+------+  | |',
      '          +-+',
    ]);

    expect(actual).toEqual(expected);
  });
});
