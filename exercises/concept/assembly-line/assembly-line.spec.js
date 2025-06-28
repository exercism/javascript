import { describe, expect, test } from '@jest/globals';
import { isBoolean, isNumber, isObject/*, isNumericString, isElectronic, isNonEmptyArray, isEmptyArray ,  assertHasId, hasType, hasConstructorProperty, hasDefinedType*/} from './assembly-line'
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
  test("isNumber works on numbers",() => {
    expect(isNumber(42)).toBe(true);
    expect(isNumber(92)).toBe(true);
    expect(isNumber(43859435.12)).toBe(true);
  });
  test("isNumber works on bigints",() => {
    expect(isNumber(42n)).toBe(true);
    expect(isNumber(92n)).toBe(true);
    expect(isNumber(1848958451n)).toBe(true)
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
class ClassForTestingisObject {
  constructor(number,word){
    this.number = number;
    this.word = word;
  }
}
describe("isObject",() => {
  test("isObject works on objects",() => {
    expect(isObject({})).toBe(true);
    expect(isObject({greeting:hello})).toBe(true);
  });
  test("isObject works on class instances",() => {
    expect(isObject(new ClassForTestingisObject(5,"Hello"))).toBe(true);
    expect(isObject(new ClassForTestingisObject(58,"null"))).toBe(true);
    expect(isObject(new ClassForTestingisObject(1488,"World!"))).toBe(true)
  });
  test("isObject works on non-Objects",() => {
    expect(isObject(true)).toBe(false)
    expect(isObject("Hello, World!")).toBe(false)
    expect(isObject(undefined)).toBe(false)
    expect(isObject("")).toBe(false)
    expect(isObject(Symbol("1"))).toBe(false)
  });
  test("isObject works on null",() => {
    expect(isObject(null)).toBe(false)
  })
});
