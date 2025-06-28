import { describe, expect, test } from '@jest/globals';
import { isBoolean, isNumber, isObject, isNumericString, isElectronic, isNonEmptyArray, isEmptyArray , isEmptyArray, assertHasId, hasType, hasConstructorProperty, hasDefinedType} from './assembly-line'
describe("isBoolean",() => {
  test("isBoolean identifies booleans",() => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  });
  test("isBoolean identifies non-booleans",() => {
    expect(isBoolean(42)).toBe(false)
    expect(isBoolean("Hello, World!")).toBe(false)
    expect(isBoolean(null)).toBe(false)
    expect(isBoolean("")).toBe(false)
    expect(isBoolean(Symbol("1"))).toBe(false)
  });
});
