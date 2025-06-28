import { describe, expect, test } from '@jest/globals';
import { isBoolean, isNumber/*, isObject, isNumericString, isElectronic, isNonEmptyArray, isEmptyArray ,  assertHasId, hasType, hasConstructorProperty, hasDefinedType*/} from './assembly-line'
describe("isBoolean",() => {
  test("isBoolean works on booleans",() => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  });
  test("isBoolean works on non-booleans",() => {
    expect(isBoolean(42)).toBe(false)
    expect(isBoolean("Hello, World!")).toBe(false)
    expect(isBoolean(null)).toBe(false)
    expect(isBoolean("")).toBe(false)
    expect(isBoolean(Symbol("1"))).toBe(false)
  });
});
describe("isNumber",() => {
  /*test("isNumber works on numbers",() => {
    expect(isNumber(42)).toBe(true);
    expect(isNumber(92)).toBe(true);
    expect(isNumber(43859435.12).toBe(true);
  });*/
  test("isNumber works on bigints",() => {
    expect(isNumber(42n)).toBe(true);
    expect(isNumber(92n)).toBe(true);
    expect(isNumber(1848958451n).toBe(true)
  });
  test("isNumber works on non-numbers",() => {
    expect(isNumber(true)).toBe(false)
    expect(isNumber("Hello, World!")).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber("")).toBe(false)
    expect(isNumber(Symbol("1"))).toBe(false)
  });
  test("isNumber works on NaN and Infinity",() => {
    expect(isNumber(NaN)).toBe(false)
    expect(isNumber(Infinity)).toBe(false)
  })
});
