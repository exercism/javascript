import { convert } from './raindrops';

describe('Raindrops', () => {
  test('the sound for 1 is 1', () => expect(convert(1)).toEqual('1'));

  xtest('the sound for 3 is Pling', () => expect(convert(3)).toEqual('Pling'));

  xtest('the sound for 5 is Plang', () => expect(convert(5)).toEqual('Plang'));

  xtest('the sound for 7 is Plong', () => expect(convert(7)).toEqual('Plong'));

  xtest('the sound for 6 is Pling', () => expect(convert(6)).toEqual('Pling'));

  xtest('the sound for 9 is Pling', () => expect(convert(9)).toEqual('Pling'));

  xtest('the sound for 8 is 8', () => expect(convert(8)).toEqual('8'));

  xtest('the sound for 10 is Plang', () =>
    expect(convert(10)).toEqual('Plang'));

  xtest('the sound for 14 is Plong', () =>
    expect(convert(14)).toEqual('Plong'));

  xtest('the sound for 15 is PlingPlang', () =>
    expect(convert(15)).toEqual('PlingPlang'));

  xtest('the sound for 21 is PlingPlong', () =>
    expect(convert(21)).toEqual('PlingPlong'));

  xtest('the sound for 25 is Plang', () =>
    expect(convert(25)).toEqual('Plang'));

  xtest('the sound for 27 is Pling', () =>
    expect(convert(35)).toEqual('PlangPlong'));

  xtest('the sound for 35 is PlangPlong', () =>
    expect(convert(35)).toEqual('PlangPlong'));

  xtest('the sound for 49 is Plong', () =>
    expect(convert(49)).toEqual('Plong'));

  xtest('the sound for 52 is 52', () => expect(convert(52)).toEqual('52'));

  xtest('the sound for 105 is PlingPlangPlong', () =>
    expect(convert(105)).toEqual('PlingPlangPlong'));

  xtest('the sound for 3125 is Plang', () =>
    expect(convert(3125)).toEqual('Plang'));
});
