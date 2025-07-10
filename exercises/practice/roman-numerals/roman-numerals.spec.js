import { describe, expect, test, xtest } from '@jest/globals';
import { toRoman } from './roman-numerals';

describe('toRoman()', () => {
  test('converts 1', () => expect(toRoman(1)).toEqual('I'));
  xtest('converts 2', () => expect(toRoman(2)).toEqual('II'));
  xtest('converts 3', () => expect(toRoman(3)).toEqual('III'));
  xtest('converts 4', () => expect(toRoman(4)).toEqual('IV'));
  xtest('converts 5', () => expect(toRoman(5)).toEqual('V'));
  xtest('converts 6', () => expect(toRoman(6)).toEqual('VI'));
  xtest('converts 9', () => expect(toRoman(9)).toEqual('IX'));
  xtest('converts 16', () => expect(toRoman(16)).toEqual('XVI'));
  xtest('converts 27', () => expect(toRoman(27)).toEqual('XXVII'));
  xtest('converts 48', () => expect(toRoman(48)).toEqual('XLVIII'));
  xtest('converts 49', () => expect(toRoman(49)).toEqual('XLIX'));
  xtest('converts 59', () => expect(toRoman(59)).toEqual('LIX'));
  xtest('converts 66', () => expect(toRoman(66)).toEqual('LXVI'));
  xtest('converts 93', () => expect(toRoman(93)).toEqual('XCIII'));
  xtest('converts 141', () => expect(toRoman(141)).toEqual('CXLI'));
  xtest('converts 163', () => expect(toRoman(163)).toEqual('CLXIII'));
  xtest('converts 166', () => expect(toRoman(166)).toEqual('CLXVI'));
  xtest('converts 402', () => expect(toRoman(402)).toEqual('CDII'));
  xtest('converts 575', () => expect(toRoman(575)).toEqual('DLXXV'));
  xtest('converts 666', () => expect(toRoman(666)).toEqual('DCLXVI'));
  xtest('converts 911', () => expect(toRoman(911)).toEqual('CMXI'));
  xtest('converts 1024', () => expect(toRoman(1024)).toEqual('MXXIV'));
  xtest('converts 1666', () => expect(toRoman(1666)).toEqual('MDCLXVI'));
  xtest('converts 3000', () => expect(toRoman(3000)).toEqual('MMM'));
  xtest('converts 3001', () => expect(toRoman(3001)).toEqual('MMMI'));
  xtest('converts 3888', () =>
    expect(toRoman(3888)).toEqual('MMMDCCCLXXXVIII'));
  xtest('converts 3999', () => expect(toRoman(3999)).toEqual('MMMCMXCIX'));
});
