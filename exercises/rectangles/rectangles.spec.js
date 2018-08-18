var rectangles = require('./rectangles');

describe('Rectangles', function () {
  it('no rows', function () {
    expect(rectangles([])).toBe(0);
  });

  xit('no columns', function () {
    expect(rectangles([''])).toBe(0);
  });

  xit('no rectangles', function () {
    expect(rectangles([' '])).toBe(0);
  });

  xit('one rectangle', function () {
    var input = [
      '+-+',
      '| |',
      '+-+'];
    expect(rectangles(input)).toBe(1);
  });

  xit('two rectangles without shared parts', function () {
    var input = [
      '  +-+',
      '  | |',
      '+-+-+',
      '| |  ',
      '+-+  '];
    expect(rectangles(input)).toBe(2);
  });

  xit('five rectangles with shared parts', function () {
    var input = [
      '  +-+',
      '  | |',
      '+-+-+',
      '| | |',
      '+-+-+'];
    expect(rectangles(input)).toBe(5);
  });

  xit('rectangle of height 1 is counted', function () {
    var input = [
      '+--+',
      '+--+'];
    expect(rectangles(input)).toBe(1);
  });

  xit('rectangle of width 1 is counted', function () {
    var input = [
      '++',
      '||',
      '++'];
    expect(rectangles(input)).toBe(1);
  });

  xit('1x1 square is counted', function () {
    var input = [
      '++',
      '++'];
    expect(rectangles(input)).toBe(1);
  });

  xit('only complete rectangles are counted', function () {
    var input = [
      '  +-+',
      '    |',
      '+-+-+',
      '| | -',
      '+-+-+'];
    expect(rectangles(input)).toBe(1);
  });

  xit('rectangles can be of different sizes', function () {
    var input = [
      '+------+----+',
      '|      |    |',
      '+---+--+    |',
      '|   |       |',
      '+---+-------+'];
    expect(rectangles(input)).toBe(3);
  });

  xit('corner is required for a rectangle to be complete', function () {
    var input = [
      '+------+----+',
      '|      |    |',
      '+------+    |',
      '|   |       |',
      '+---+-------+'];
    expect(rectangles(input)).toBe(2);
  });

  xit('large input with many rectangles', function () {
    var input = [
      '+---+--+----+',
      '|   +--+----+',
      '+---+--+    |',
      '|   +--+----+',
      '+---+--+--+-+',
      '+---+--+--+-+',
      '+------+  | |',
      '          +-+'];
    expect(rectangles(input)).toBe(60);
  });
});
