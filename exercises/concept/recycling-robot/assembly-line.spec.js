import { describe, expect, test } from '@jest/globals';
import {
  isBoolean,
  isNumber,
  isObject,
  isNumericString,
  isElectronic,
  isNonEmptyArray,
  isEmptyArray,
  assertHasId,
  hasType,
  hasIdProperty,
  hasDefinedType,
} from './assembly-line';
import { ElectronicDevice } from './lib.js';

describe('isBoolean', () => {
  test('isBoolean works on booleans', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });
  test('isBoolean works on non-booleans', () => {
    expect(isBoolean(42)).toBe(false);
    expect(isBoolean('Hello, World!')).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean('')).toBe(false);
    expect(isBoolean(Symbol('1'))).toBe(false);
  });
});

describe('isNumber', () => {
  test('isNumber works on numbers', () => {
    expect(isNumber(42)).toBe(true);
    expect(isNumber(92)).toBe(true);
    expect(isNumber(43859435.12)).toBe(true);
  });
  test('isNumber works on bigints', () => {
    expect(isNumber(42n)).toBe(true);
    expect(isNumber(92n)).toBe(true);
    expect(isNumber(1848958451n)).toBe(true);
  });
  test('isNumber works on non-numbers', () => {
    expect(isNumber(true)).toBe(false);
    expect(isNumber('Hello, World!')).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber('')).toBe(false);
    expect(isNumber(Symbol('1'))).toBe(false);
  });
  test('isNumber works on NaN and Infinity', () => {
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber(Infinity)).toBe(false);
  });
});

class ClassForTesting {
  constructor(number, word) {
    this.number = number;
    this.word = word;
  }
  id() {}
}

describe('isObject', () => {
  test('isObject works on objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ greeting: 'hello' })).toBe(true);
  });
  test('isObject works on class instances', () => {
    expect(isObject(new ClassForTesting(5, 'Hello'))).toBe(true);
    expect(isObject(new ClassForTesting(58, 'null'))).toBe(true);
    expect(isObject(new ClassForTesting(1488, 'World!'))).toBe(true);
  });
  test('isObject works on non-Objects', () => {
    expect(isObject(true)).toBe(false);
    expect(isObject('Hello, World!')).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject('')).toBe(false);
    expect(isObject(Symbol('1'))).toBe(false);
  });
  test('isObject works on null', () => {
    expect(isObject(null)).toBe(false);
  });
});

describe('isNumericString', () => {
  test('isNumericString works on numeric strings', () => {
    expect(isNumericString('42')).toBe(true);
    expect(isNumericString('582')).toBe(true);
  });
  test('isNumericString works on non-numeric strings', () => {
    expect(isNumericString('Hello, World!')).toBe(false);
    expect(isNumericString('<!DOCTYPE HTML>')).toBe(false);
    expect(isNumericString('NaN')).toBe(false);
  });
  test('isNumericString works on non-strings', () => {
    expect(isNumericString(true)).toBe(false);
    expect(isNumericString(1234)).toBe(false);
    expect(isNumericString(undefined)).toBe(false);
    expect(isNumericString([1, 2, 3, 4])).toBe(false);
    expect(isNumericString(Symbol('\u0070'))).toBe(false);
  });
});

class Oven extends ElectronicDevice {}
class Computer extends ElectronicDevice {}
class PersonalComputer extends Computer {}
class HomeMadePersonalComputer extends PersonalComputer {}

describe('isElectronic', () => {
  test('isElectronic works on instances of ElectronicDevice or its child classes', () => {
    expect(isElectronic(new ElectronicDevice())).toBe(true);
    expect(isElectronic(new Oven())).toBe(true);
  });
  test('isElectronic works on other objects', () => {
    expect(isElectronic({ language: 'javascript', typing: 'dynamic' })).toBe(
      false,
    );
    expect(isElectronic(new ClassForTesting(42, 'ElectronicDevice'))).toBe(
      false,
    );
    expect(isElectronic([1, 2, 3, 4])).toBe(false);
  });
  test('isElectronic works on non-objects', () => {
    expect(isElectronic(true)).toBe(false);
    expect(isElectronic(1234)).toBe(false);
    expect(isElectronic(undefined)).toBe(false);
    expect(isElectronic('Hello!')).toBe(false);
    expect(isElectronic(Symbol('\u0070'))).toBe(false);
  });
  test('a really long prototype chain', () => {
    expect(isElectronic(new HomeMadePersonalComputer())).toBe(true);
  });
});

describe('isNonEmptyArray', () => {
  test('isNonEmptyArray works on non-empty arrays', () => {
    expect(isNonEmptyArray([1, 2, 3])).toBe(true);
    expect(isNonEmptyArray(['a', 'b'])).toBe(true);
  });
  test('isNonEmptyArray works on empty arrays', () => {
    expect(isNonEmptyArray([])).toBe(false);
  });
  test('isNonEmptyArray works on non-arrays', () => {
    expect(isNonEmptyArray({})).toBe(false);
    expect(isNonEmptyArray('string')).toBe(false);
    expect(isNonEmptyArray(123)).toBe(false);
  });
});

describe('isEmptyArray', () => {
  test('isEmptyArray works on empty arrays', () => {
    expect(isEmptyArray([])).toBe(true);
  });
  test('isEmptyArray works on non-empty arrays', () => {
    expect(isEmptyArray([1, 2, 3])).toBe(false);
  });
  test('isEmptyArray works on non-arrays', () => {
    expect(isEmptyArray({})).toBe(false);
    expect(isEmptyArray('string')).toBe(false);
    expect(isEmptyArray(123)).toBe(false);
  });
});

class TestAssertHasId {
  id() {}
}

describe('assertHasId', () => {
  test("assertHasId throws error if object has no 'id' property or method", () => {
    expect(() => assertHasId({})).toThrow();
  });
  test("assertHasId does not throw error if object has 'id' property or method", () => {
    expect(() => assertHasId({ id: 1 })).not.toThrow();
    expect(() => assertHasId(new TestAssertHasId())).not.toThrow();
  });
});

class TestHasType {
  type() {}
}

describe('hasType', () => {
  test('hasType works correctly', () => {
    expect(hasType({ type: 'example' })).toBe(true);
    expect(hasType({})).toBe(false);
    expect(hasType(new TestHasType())).toBe(true);
  });
});

describe('hasIdProperty', () => {
  test('hasIdProperty works correctly', () => {
    expect(hasIdProperty({ id: 'test' })).toBe(true);
    expect(hasIdProperty({})).toBe(false);
    expect(hasIdProperty(new ClassForTesting())).toBe(false);
  });
});

describe('hasDefinedType', () => {
  test('hasDefinedType works correctly', () => {
    expect(hasDefinedType({ type: 'example' })).toBe(true);
    expect(hasDefinedType({ type: undefined })).toBe(false);
    expect(hasDefinedType({})).toBe(false);
  });
});
