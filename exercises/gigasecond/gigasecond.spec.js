import { gigasecond } from './gigasecond';

describe('Gigasecond', () => {
  // date only specification of time
  test('tells a gigasecond anniversary since midnight', () => {
    const gs = gigasecond(new Date(Date.UTC(2011, 3, 25)));
    const expectedDate = new Date(Date.parse('2043-01-01T01:46:40Z'));
    expect(gs).toEqual(expectedDate);
  });

  // second test for date only specification of time
  xtest('tells another gigasecond anniversary since midnight', () => {
    const gs = gigasecond(new Date(Date.UTC(1977, 5, 13)));
    const expectedDate = new Date(Date.parse('2009-02-19T01:46:40Z'));
    expect(gs).toEqual(expectedDate);
  });

  // third test for date only specification of time
  xtest('tells gigasecond anniversary since midnight, from before UNIX epoch', () => {
    const gs = gigasecond(new Date(Date.UTC(1959, 6, 19)));
    const expectedDate = new Date(Date.parse('1991-03-27T01:46:40Z'));
    expect(gs).toEqual(expectedDate);
  });

  // full time specified
  xtest('tells the anniversary, including a time', () => {
    const gs = gigasecond(new Date(Date.UTC(2015, 0, 24, 22, 0, 0)));
    const expectedDate = new Date(Date.parse('2046-10-02T23:46:40Z'));
    expect(gs).toEqual(expectedDate);
  });

  // full time with day roll-over
  xtest('tells the anniversary is next day when you are born at night', () => {
    const gs = gigasecond(new Date(Date.UTC(2015, 0, 24, 23, 59, 59)));
    const expectedDate = new Date(Date.parse('2046-10-03T01:46:39Z'));
    expect(gs).toEqual(expectedDate);
  });

  xtest('does not mutate the input', () => {
    const input = new Date(Date.UTC(2020, 0, 4, 20, 28, 30));
    gigasecond(input);
    expect(input).toEqual(new Date(Date.UTC(2020, 0, 4, 20, 28, 30)));
  });
});
