import at from './clock';

describe('Clock', () => {

  it('prints the hour',  () => {
    expect(at(8).toString()).toEqual('08:00');
    expect(at(9).toString()).toEqual('09:00');
  });

  xit('prints past the hour',  () => {
    expect(at(11, 9).toString()).toEqual('11:09');
    expect(at(11, 19).toString()).toEqual('11:19');
  });

  xit('can add minutes',  () => {
    const clock = at(10).plus(3);
    expect(clock.toString()).toEqual('10:03');
  });

  xit('can add over an hour',  () => {
    const clock = at(10).plus(61);
    expect(clock.toString()).toEqual('11:01');
  });

  xit('wraps around midnight',  () => {
    const clock = at(23, 59).plus(2);
    expect(clock.toString()).toEqual('00:01');
  });

  xit('can subtract minutes',  () => {
    const clock = at(10, 3).minus(3);
    expect(clock.toString()).toEqual('10:00');
  });

  xit('can subtract over an hour',  () => {
    const clock = at(10, 3).minus(30);
    expect(clock.toString()).toEqual('09:33');

    const clock2 = at(10, 3).minus(70);
    expect(clock2.toString()).toEqual('08:53');
  });

  xit('can know if it\'s equal to another clock',  () => {
    const clock1 = at(10, 3);
    const clock2 = at(10, 3);
    expect(clock1.equals(clock2)).toBe(true);
  });

  xit('can know if it\'s not equal to another clock',  () => {
    const clock1 = at(10, 3);
    const clock2 = at(10, 4);
    expect(clock1.equals(clock2)).toBe(false);
  });

  xit('wraps around midnight backwards',  () => {
    const clock = at(0, 3).minus(4);
    expect(clock.toString()).toEqual('23:59');
  });

});
