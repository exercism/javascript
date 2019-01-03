import { convert } from './raindrops';

describe('Raindrops', () => {
  test('converts 1', () => expect(convert(1)).toEqual('1'));

  xtest('converts 3', () => expect(convert(3)).toEqual('Pling'));

  xtest('converts 5', () => expect(convert(5)).toEqual('Plang'));

  xtest('converts 7', () => expect(convert(7)).toEqual('Plong'));

  xtest('converts 6', () => expect(convert(6)).toEqual('Pling'));

  xtest('converts 9', () => expect(convert(9)).toEqual('Pling'));

  xtest('converts 10', () => expect(convert(10)).toEqual('Plang'));

  xtest('converts 14', () => expect(convert(14)).toEqual('Plong'));

  xtest('converts 15', () => expect(convert(15)).toEqual('PlingPlang'));

  xtest('converts 21', () => expect(convert(21)).toEqual('PlingPlong'));

  xtest('converts 25', () => expect(convert(25)).toEqual('Plang'));

  xtest('converts 35', () => expect(convert(35)).toEqual('PlangPlong'));

  xtest('converts 49', () => expect(convert(49)).toEqual('Plong'));

  xtest('converts 52', () => expect(convert(52)).toEqual('52'));

  xtest('converts 105', () => expect(convert(105)).toEqual('PlingPlangPlong'));

  xtest('converts 12121', () => expect(convert(12121)).toEqual('12121'));
});
