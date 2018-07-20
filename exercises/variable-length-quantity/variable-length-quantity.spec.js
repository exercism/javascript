import VLQ from './variable-length-quantity';

describe('VariableLengthQuantity', () => {
  describe('Encode a series of integers, producing a series of bytes.', () => {
    test('zero', () => {
      expect(VLQ.encode([0])).toEqual([0]);
    });

    xtest('arbitrary single byte', () => {
      expect(VLQ.encode([0x40])).toEqual([0x40]);
    });

    xtest('largest single byte', () => {
      expect(VLQ.encode([0x7f])).toEqual([0x7f]);
    });

    xtest('smallest double byte', () => {
      expect(VLQ.encode([0x80])).toEqual([0x81, 0]);
    });

    xtest('arbitrary double byte', () => {
      expect(VLQ.encode([0x2000])).toEqual([0xc0, 0]);
    });

    xtest('largest double byte', () => {
      expect(VLQ.encode([0x3fff])).toEqual([0xff, 0x7f]);
    });

    xtest('smallest triple byte', () => {
      expect(VLQ.encode([0x4000])).toEqual([0x81, 0x80, 0]);
    });

    xtest('arbitrary triple byte', () => {
      expect(VLQ.encode([0x100000])).toEqual([0xc0, 0x80, 0]);
    });

    xtest('largest triple byte', () => {
      expect(VLQ.encode([0x1fffff])).toEqual([0xff, 0xff, 0x7f]);
    });

    xtest('smallest quadruple byte', () => {
      expect(VLQ.encode([0x200000])).toEqual([0x81, 0x80, 0x80, 0]);
    });

    xtest('arbitrary quadruple byte', () => {
      expect(VLQ.encode([0x8000000])).toEqual([0xc0, 0x80, 0x80, 0]);
    });

    xtest('largest quadruple byte', () => {
      expect(VLQ.encode([0xfffffff])).toEqual([0xff, 0xff, 0xff, 0x7f]);
    });

    xtest('smallest quintuple byte', () => {
      expect(VLQ.encode([0x10000000])).toEqual([0x81, 0x80, 0x80, 0x80, 0]);
    });

    xtest('arbitrary quintuple byte', () => {
      expect(VLQ.encode([0xff000000])).toEqual([0x8f, 0xf8, 0x80, 0x80, 0]);
    });

    xtest('maximum 32-bit integer input', () => {
      expect(VLQ.encode([0xffffffff])).toEqual([0x8f, 0xff, 0xff, 0xff, 0x7f]);
    });

    xtest('two single-byte values', () => {
      expect(VLQ.encode([0x40, 0x7f])).toEqual([0x40, 0x7f]);
    });

    xtest('two multi-byte values', () => {
      expect(VLQ.encode([0x4000, 0x123456])).toEqual([0x81, 0x80, 0, 0xc8, 0xe8, 0x56]);
    });

    xtest('many multi-byte values', () => {
      const input = [0x2000, 0x123456, 0xfffffff, 0, 0x3fff, 0x4000];
      const expected = [0xc0, 0, 0xc8, 0xe8, 0x56, 0xff, 0xff, 0xff, 0x7f, 0, 0xff, 0x7f, 0x81, 0x80, 0];
      expect(VLQ.encode(input)).toEqual(expected);
    });
  });

  describe('Decode a series of bytes, producing a series of integers.', () => {
    xtest('one byte', () => {
      expect(VLQ.decode([0x7f])).toEqual([0x7f]);
    });

    xtest('two bytes', () => {
      expect(VLQ.decode([0xc0, 0])).toEqual([0x2000]);
    });

    xtest('three bytes', () => {
      expect(VLQ.decode([0xff, 0xff, 0x7f])).toEqual([0x1fffff]);
    });

    xtest('four bytes', () => {
      expect(VLQ.decode([0x81, 0x80, 0x80, 0])).toEqual([0x200000]);
    });

    xtest('maximum 32-bit integer', () => {
      expect(VLQ.decode([0x8f, 0xff, 0xff, 0xff, 0x7f])).toEqual([0xffffffff]);
    });

    xtest('incomplete sequence causes error', () => {
      expect(() => { VLQ.decode([0xff]); }).toThrow(new Error('Incomplete sequence'));
    });

    xtest('incomplete sequence causes error, even if value is zero', () => {
      expect(() => { VLQ.decode([0x80]); }).toThrow(new Error('Incomplete sequence'));
    });

    xtest('multiple values', () => {
      const input = [0xc0, 0, 0xc8, 0xe8, 0x56, 0xff, 0xff, 0xff, 0x7f, 0, 0xff, 0x7f, 0x81, 0x80, 0];
      const expected = [0x2000, 0x123456, 0xfffffff, 0, 0x3fff, 0x4000];
      expect(VLQ.decode(input)).toEqual(expected);
    });
  });
});
