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
  test('returns true for true', () => {
    expect(isBoolean(true)).toBe(true);
  });

  test('returns true for false', () => {
    expect(isBoolean(false)).toBe(true);
  });

  test('returns false for numbers', () => {
    expect(isBoolean(42)).toBe(false);
    expect(isBoolean(42n)).toBe(false);
    expect(isBoolean(0)).toBe(false);
  });

  test('returns false for strings', () => {
    expect(isBoolean('Hello, World!')).toBe(false);
    expect(isBoolean('42')).toBe(false);
    expect(isBoolean('true')).toBe(false);
    expect(isBoolean('')).toBe(false);
  });

  test('returns false for null', () => {
    expect(isBoolean(null)).toBe(false);
  });

  test('returns false for undefined', () => {
    expect(isBoolean(undefined)).toBe(false);
  });

  test('returns false for symbols', () => {
    expect(isBoolean(Symbol('1'))).toBe(false);
    expect(isBoolean(Symbol('true'))).toBe(false);
  });

  test('returns false for objects', () => {
    expect(isBoolean({})).toBe(false);
    expect(isBoolean({ true: false })).toBe(false);
  });

  test('returns false for arrays', () => {
    expect(isBoolean([])).toBe(false);
    expect(isBoolean([true, false])).toBe(false);
  });
});

describe('isNumber', () => {
  test('returns true for numbers', () => {
    expect(isNumber(42)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(43_859_435.12)).toBe(true);
    expect(isNumber(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isNumber(Number.MAX_VALUE)).toBe(true);
    expect(isNumber(Number.MIN_SAFE_INTEGER)).toBe(true);
    expect(isNumber(Number.MIN_VALUE)).toBe(true);
  });

  test('returns true for bigints', () => {
    expect(isNumber(42n)).toBe(true);
    expect(isNumber(0n)).toBe(true);
    expect(isNumber(92n)).toBe(true);
    expect(isNumber(1_848_958_451n)).toBe(true);
    expect(isNumber(9_007_199_254_740_991n)).toBe(true);
    expect(isNumber(9_999_999_999_999_999n)).toBe(true);
  });

  test('returns false for non-finite numbers such as NaN', () => {
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber(Infinity)).toBe(false);
  });

  test('returns false for strings', () => {
    expect(isNumber('Hello, World!')).toBe(false);
    expect(isNumber('42')).toBe(false);
    expect(isNumber('true')).toBe(false);
    expect(isNumber('')).toBe(false);
  });

  test('returns false for null', () => {
    expect(isNumber(null)).toBe(false);
  });

  test('returns false for undefined', () => {
    expect(isNumber(undefined)).toBe(false);
  });

  test('returns false for symbols', () => {
    expect(isNumber(Symbol('1'))).toBe(false);
    expect(isNumber(Symbol('true'))).toBe(false);
  });

  test('returns false for objects', () => {
    expect(isNumber({})).toBe(false);
    expect(isNumber({ true: false })).toBe(false);
  });

  test('returns false for arrays', () => {
    expect(isNumber([])).toBe(false);
    expect(isNumber([1])).toBe(false);
  });

  test('returns false for booleans', () => {
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
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
  test('returns true on object literals', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ greeting: 'hello' })).toBe(true);
  });

  test('returns true on class instances', () => {
    expect(isObject(new ClassForTesting(5, 'Hello'))).toBe(true);
    expect(isObject(new ClassForTesting(58, 'null'))).toBe(true);
    expect(isObject(new ClassForTesting(1488, 'World!'))).toBe(true);
  });

  test('returns true for arrays which are objects', () => {
    expect(isObject([])).toBe(true);
    expect(isObject([{}])).toBe(true);
  });

  test('returns false on functions', () => {
    expect(isObject(isObject)).toBe(false);
    expect(isObject(() => {})).toBe(false);
    expect(isObject(() => ({}))).toBe(false);
  });

  test('returns false for strings', () => {
    expect(isObject('Hello, World!')).toBe(false);
    expect(isObject('{}')).toBe(false);
    expect(isObject('42')).toBe(false);
    expect(isObject('true')).toBe(false);
    expect(isObject('')).toBe(false);
  });

  test('returns false for null', () => {
    expect(isObject(null)).toBe(false);
  });

  test('returns false for undefined', () => {
    expect(isObject(undefined)).toBe(false);
  });

  test('returns false for symbols', () => {
    expect(isObject(Symbol('1'))).toBe(false);
    expect(isObject(Symbol('true'))).toBe(false);
  });
  test('returns false for booleans', () => {
    expect(isObject(true)).toBe(false);
    expect(isObject(false)).toBe(false);
  });
});

describe('isNumericString', () => {
  test('returns true on single-digit strings', () => {
    expect(isNumericString('1')).toBe(true);
    expect(isNumericString('0')).toBe(true);
    expect(isNumericString('9')).toBe(true);
  });

  test('returns true on negative single-digit strings', () => {
    expect(isNumericString('-1')).toBe(true);
    expect(isNumericString('-0')).toBe(true);
    expect(isNumericString('-9')).toBe(true);
  });

  test('returns true on multi-digit strings', () => {
    expect(isNumericString('12')).toBe(true);
    expect(isNumericString('00')).toBe(true);
    expect(isNumericString('42')).toBe(true);
    expect(isNumericString('-582')).toBe(true);
  });

  test('returns false on non-numeric strings', () => {
    expect(isNumericString('')).toBe(false);
    expect(isNumericString('-')).toBe(false);
    expect(isNumericString('--')).toBe(false);
    expect(isNumericString('--32')).toBe(false);
    expect(isNumericString('Hello, World!')).toBe(false);
    expect(isNumericString('<!DOCTYPE HTML>')).toBe(false);
    expect(isNumericString('NaN')).toBe(false);
  });

  test('returns false for bigint strings', () => {
    expect(isNumericString('12n')).toBe(false);
    expect(isNumericString('-582n')).toBe(false);
  });

  test('returns false for null', () => {
    expect(isNumericString(null)).toBe(false);
  });

  test('returns false for undefined', () => {
    expect(isNumericString(undefined)).toBe(false);
  });

  test('returns false for symbols', () => {
    expect(isNumericString(Symbol('1'))).toBe(false);
    expect(isNumericString(Symbol('true'))).toBe(false);
  });

  test('returns false for arrays', () => {
    expect(isNumericString([])).toBe(false);
    expect(isNumericString(['42'])).toBe(false);
  });

  test('returns false for booleans', () => {
    expect(isNumericString(true)).toBe(false);
    expect(isNumericString(false)).toBe(false);
  });
});

class Oven extends ElectronicDevice {}
class Computer extends ElectronicDevice {}
class PersonalComputer extends Computer {}
class HomeMadePersonalComputer extends PersonalComputer {}

describe('isElectronic', () => {
  test('returns true on ElectronicDevices', () => {
    expect(isElectronic(new ElectronicDevice())).toBe(true);
  });

  test('returns true on sub-classes of ElectronicDevice', () => {
    expect(isElectronic(new Oven())).toBe(true);
    expect(isElectronic(new PersonalComputer())).toBe(true);
    expect(isElectronic(new HomeMadePersonalComputer())).toBe(true);
  });

  test('returns false on electronic devices not created using the constructor', () => {
    expect(isElectronic(Object.create(ElectronicDevice.prototype))).toBe(false);
    expect(isElectronic({ __proto__: ElectronicDevice.prototype })).toBe(false);

    const fakeDevice = {};
    Object.setPrototypeOf(fakeDevice, ElectronicDevice.prototype);
    expect(isElectronic(fakeDevice)).toBe(false);
  });

  test('returns false on non-electronic device objects', () => {
    expect(isElectronic({ language: 'javascript', typing: 'dynamic' })).toBe(
      false,
    );
    expect(isElectronic(new ClassForTesting(42, 'ElectronicDevice'))).toBe(
      false,
    );
    expect(isElectronic([1, 2, 3, 4])).toBe(false);
  });

  test('returns false for strings', () => {
    expect(isElectronic('12n')).toBe(false);
    expect(isElectronic('ElectronicDevice')).toBe(false);
  });

  test('returns false for null', () => {
    expect(isElectronic(null)).toBe(false);
  });

  test('returns false for undefined', () => {
    expect(isElectronic(undefined)).toBe(false);
  });

  test('returns false for symbols', () => {
    expect(isElectronic(Symbol('1'))).toBe(false);
    expect(isElectronic(Symbol('true'))).toBe(false);
  });

  test('returns false for arrays', () => {
    expect(isElectronic([])).toBe(false);
    expect(isElectronic(['42'])).toBe(false);
  });

  test('returns false for booleans', () => {
    expect(isElectronic(true)).toBe(false);
    expect(isElectronic(false)).toBe(false);
  });
});

describe('isNonEmptyArray', () => {
  test('returns true for non-empty arrays', () => {
    expect(isNonEmptyArray([1, 2, 3])).toBe(true);
    expect(isNonEmptyArray(['a', 'b'])).toBe(true);

    // The prototype of Array is also an array, but in Node it's considered empty
    // expect(isNonEmptyArray(Array.prototype)).toBe(true);
  });

  test('returns false for empty arrays', () => {
    expect(isNonEmptyArray([])).toBe(false);
  });

  test('returns false for fake non-empty arrays', () => {
    expect(isNonEmptyArray({ __proto__: Array.prototype, length: 1 })).toBe(
      false,
    );

    const fakeArray = { length: 1 };
    Object.setPrototypeOf(fakeArray, Array.prototype);
    expect(isNonEmptyArray(fakeArray)).toBe(false);
  });

  test('returns false for strings', () => {
    expect(isNonEmptyArray('12n')).toBe(false);
    expect(isNonEmptyArray('[1]')).toBe(false);
  });

  test('returns false for null', () => {
    expect(isNonEmptyArray(null)).toBe(false);
  });

  test('returns false for undefined', () => {
    expect(isNonEmptyArray(undefined)).toBe(false);
  });

  test('returns false for symbols', () => {
    expect(isNonEmptyArray(Symbol('1'))).toBe(false);
    expect(isNonEmptyArray(Symbol('[1]'))).toBe(false);
  });

  test('returns false for booleans', () => {
    expect(isNonEmptyArray(true)).toBe(false);
    expect(isNonEmptyArray(false)).toBe(false);
  });
});

describe('isEmptyArray', () => {
  test('returns true for empty arrays', () => {
    expect(isEmptyArray([])).toBe(true);
  });

  test('returns false for non-empty arrays', () => {
    expect(isEmptyArray([1, 2, 3])).toBe(false);
    expect(isEmptyArray(['a', 'b'])).toBe(false);

    // The prototype of Array is also an array, but in Node it's considered empty
    // expect(isEmptyArray(Array.prototype)).toBe(false);
  });

  test('returns false on fake empty arrays', () => {
    expect(isEmptyArray({ __proto__: Array.prototype, length: 0 })).toBe(false);
    expect(isEmptyArray(Object.create(Array.prototype))).toBe(false);

    const fakeArray = {};
    Object.setPrototypeOf(fakeArray, Array.prototype);
    expect(isNonEmptyArray(fakeArray)).toBe(false);
  });

  test('returns false for strings', () => {
    expect(isEmptyArray('12n')).toBe(false);
    expect(isEmptyArray('[]')).toBe(false);
  });

  test('returns false for null', () => {
    expect(isEmptyArray(null)).toBe(false);
  });

  test('returns false for undefined', () => {
    expect(isEmptyArray(undefined)).toBe(false);
  });

  test('returns false for symbols', () => {
    expect(isEmptyArray(Symbol('1'))).toBe(false);
    expect(isEmptyArray(Symbol('[]'))).toBe(false);
  });

  test('returns false for booleans', () => {
    expect(isEmptyArray(true)).toBe(false);
    expect(isEmptyArray(false)).toBe(false);
  });
});

class MagicInspector {
  type() {
    return 'sleight of hand';
  }
}

class MagicRevealer extends MagicInspector {
  spill() {
    throw new Error('A true magician never reveals their secrets');
  }
}

describe('hasType', () => {
  test('returns true if the type property exists', () => {
    expect(hasType({ type: 'car', color: 'red' })).toBe(true);
  });

  test('returns true if the type method exists', () => {
    expect(hasType(new MagicInspector())).toBe(true);
  });

  test('returns true if the type method is inherited', () => {
    expect(hasType(new MagicRevealer())).toBe(true);
  });

  test('returns false if neither the type property, nor the method exists', () => {
    expect(hasType({ color: 'green' })).toBe(false);
  });
});

class IdGenerator {
  id() {
    return Math.random() * 42;
  }
}

class MagicIdGenerator extends IdGenerator {
  magic() {
    return '🔮';
  }
}

describe('assertHasId', () => {
  test('returns nothing if the id property is present', () => {
    expect(() => assertHasId({ id: 1 })).not.toThrow();
    expect(() => assertHasId({ id: 42, color: 'red' })).not.toThrow();

    const oven = new Oven();
    oven.id = 42;
    expect(() => assertHasId(oven)).not.toThrow();

    // Even when there is no ID set
    expect(() => assertHasId({ id: null })).not.toThrow();
  });

  test('returns nothing if the id method is present', () => {
    expect(() => assertHasId(new IdGenerator())).not.toThrow();
  });

  test('returns nothing if the id method is inherited', () => {
    expect(() => assertHasId(new MagicIdGenerator())).not.toThrow();
  });

  test("throws error if object has no 'id' property or method", () => {
    expect(() => assertHasId({})).toThrow(Error);
    expect(() => assertHasId({ color: 'green' })).toThrow(Error);
  });
});

class SimpleData {
  constructor() {
    this.number = '42';
    this.id = 'BC269327FE1D9B95';
  }
}

class StealingData extends SimpleData {}

class MethodData {
  constructor() {
    this.number = '42';
    this._id = 'BC269327FE1D9B95';
  }

  get id() {
    return this._id;
  }
}

describe('hasIdProperty', () => {
  test('returns true if it has the id property', () => {
    expect(hasIdProperty({ id: 'test' })).toBe(true);
    expect(hasIdProperty(new SimpleData())).toBe(true);
  });

  test('returns false if it does not have the id property', () => {
    expect(hasIdProperty(new MethodData())).toBe(false);
    expect(hasIdProperty({ color: 'green' })).toBe(false);
  });

  test('returns true if the id property was set in the constructor in the prototype chain', () => {
    expect(hasIdProperty(new StealingData())).toBe(true);
  });
});

describe('hasDefinedType', () => {
  test('returns true if the type property is defined and set', () => {
    expect(hasDefinedType({ type: 'car', color: 'green' })).toBe(true);
  });

  test('returns true if the type property is defined and set to an empty value', () => {
    expect(hasDefinedType({ type: null, color: 'blue' })).toBe(true);
  });

  test('returns false if the type property is defined but not set', () => {
    expect(hasDefinedType({ type: undefined, color: 'red' })).toBe(false);
  });

  test('returns false if the type property is missing', () => {
    expect(hasDefinedType({ color: 'white' })).toBe(false);
    expect(hasDefinedType(new MagicInspector())).toBe(false);
  });
});
