import Raindrops from './raindrops';

describe('Raindrops', () => {
  const drops = new Raindrops();

  test('converts 1', () => expect(drops.convert(1)).toEqual('1'));

  xtest('converts 3', () => expect(drops.convert(3)).toEqual('Pling'));

  xtest('converts 5', () => expect(drops.convert(5)).toEqual('Plang'));

  xtest('converts 7', () => expect(drops.convert(7)).toEqual('Plong'));

  xtest('converts 6', () => expect(drops.convert(6)).toEqual('Pling'));

  xtest('converts 9', () => expect(drops.convert(9)).toEqual('Pling'));

  xtest('converts 10', () => expect(drops.convert(10)).toEqual('Plang'));

  xtest('converts 14', () => expect(drops.convert(14)).toEqual('Plong'));

  xtest('converts 15', () => expect(drops.convert(15)).toEqual('PlingPlang'));

  xtest('converts 21', () => expect(drops.convert(21)).toEqual('PlingPlong'));

  xtest('converts 25', () => expect(drops.convert(25)).toEqual('Plang'));

  xtest('converts 35', () => expect(drops.convert(35)).toEqual('PlangPlong'));

  xtest('converts 49', () => expect(drops.convert(49)).toEqual('Plong'));

  xtest('converts 52', () => expect(drops.convert(52)).toEqual('52'));

  xtest('converts 105', () => expect(drops.convert(105)).toEqual('PlingPlangPlong'));

  xtest('converts 12121', () => expect(drops.convert(12121)).toEqual('12121'));
});
