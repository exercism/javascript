import { convert } from './raindrops';

describe('Raindrops', () => {
  test('the sound for 1 is 1', () => expect(convert(1)).toEqual('1'));

  xtest('the sound for 3 is Pling', () => expect(convert(3)).toEqual('Pling'));

  xtest('the sound for 5 is Plang', () => expect(convert(5)).toEqual('Plang'));

  xtest('the sound for 7 is Plong', () => expect(convert(7)).toEqual('Plong'));

  xtest('the sound for 6 is Pling as it has a factor 3', () =>
    expect(convert(6)).toEqual('Pling'));

  xtest('2 to the power 3 does not make a raindrop sound as 3 is the exponent not the base', () =>
    expect(convert(8)).toEqual('8'));

  xtest('the sound for 9 is Pling as it has a factor 3', () =>
    expect(convert(9)).toEqual('Pling'));

  xtest('the sound for 10 is Plang as it has a factor 5', () =>
    expect(convert(10)).toEqual('Plang'));

  xtest('the sound for 14 is Plong as it has a factor of 7', () =>
    expect(convert(14)).toEqual('Plong'));

  xtest('the sound for 15 is PlingPlang as it has factors 3 and 5', () =>
    expect(convert(15)).toEqual('PlingPlang'));

  xtest('the sound for 21 is PlingPlong as it has factors 3 and 7', () =>
    expect(convert(21)).toEqual('PlingPlong'));

  xtest('the sound for 25 is Plang as it has a factor 5', () =>
    expect(convert(25)).toEqual('Plang'));

  xtest('the sound for 27 is Pling as it has a factor 3', () =>
    expect(convert(27)).toEqual('Pling'));

  xtest('the sound for 35 is PlangPlong as it has factors 5 and 7', () =>
    expect(convert(35)).toEqual('PlangPlong'));

  xtest('the sound for 49 is Plong as it has a factor 7', () =>
    expect(convert(49)).toEqual('Plong'));

  xtest('the sound for 52 is 52', () => expect(convert(52)).toEqual('52'));

  xtest('the sound for 105 is PlingPlangPlong as it has factors 3, 5 and 7', () =>
    expect(convert(105)).toEqual('PlingPlangPlong'));

  xtest('the sound for 3125 is Plang as it has a factor 5', () =>
    expect(convert(3125)).toEqual('Plang'));
});
