import toRoman from './roman-numerals';

describe('toRoman()', () => {
  it('converts 1', () => expect(toRoman(1)).toEqual('I'));
  xit('converts 2', () => expect(toRoman(2)).toEqual('II'));
  xit('converts 3', () => expect(toRoman(3)).toEqual('III'));
  xit('converts 4', () => expect(toRoman(4)).toEqual('IV'));
  xit('converts 5', () => expect(toRoman(5)).toEqual('V'));
  xit('converts 6', () => expect(toRoman(6)).toEqual('VI'));
  xit('converts 9', () => expect(toRoman(9)).toEqual('IX'));
  xit('converts 27', () => expect(toRoman(27)).toEqual('XXVII'));
  xit('converts 48', () => expect(toRoman(48)).toEqual('XLVIII'));
  xit('converts 59', () => expect(toRoman(59)).toEqual('LIX'));
  xit('converts 93', () => expect(toRoman(93)).toEqual('XCIII'));
  xit('converts 141', () => expect(toRoman(141)).toEqual('CXLI'));
  xit('converts 163', () => expect(toRoman(163)).toEqual('CLXIII'));
  xit('converts 402', () => expect(toRoman(402)).toEqual('CDII'));
  xit('converts 575', () => expect(toRoman(575)).toEqual('DLXXV'));
  xit('converts 911', () => expect(toRoman(911)).toEqual('CMXI'));
  xit('converts 1024', () => expect(toRoman(1024)).toEqual('MXXIV'));
  xit('converts 3000', () => expect(toRoman(3000)).toEqual('MMM'));
});
