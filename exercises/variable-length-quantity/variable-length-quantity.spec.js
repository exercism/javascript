var VLQ = require('./variable-length-quantity');

describe('VariableLengthQuantity', function () {
  describe('Encode a series of integers, producing a series of bytes.', function () {
    it('zero', function () {
      expect(VLQ.encode([0])).toEqual([0]);
    });

    it('arbitrary single byte', function () {
      expect(VLQ.encode([0x40])).toEqual([0x40]);
    });

    it('largest single byte', function () {
      expect(VLQ.encode([0x7f])).toEqual([0x7f]);
    });

    it('smallest double byte', function () {
      expect(VLQ.encode([0x80])).toEqual([0x81, 0]);
    });

    it('arbitrary double byte', function () {
      expect(VLQ.encode([0x2000])).toEqual([0xc0, 0]);
    });

    it('largest double byte', function () {
      expect(VLQ.encode([0x3fff])).toEqual([0xff, 0x7f]);
    });

    it('smallest triple byte', function () {
      expect(VLQ.encode([0x4000])).toEqual([0x81, 0x80, 0]);
    });

    it('arbitrary triple byte', function () {
      expect(VLQ.encode([0x100000])).toEqual([0xc0, 0x80, 0]);
    });

    it('largest triple byte', function () {
      expect(VLQ.encode([0x1fffff])).toEqual([0xff, 0xff, 0x7f]);
    });

    it('smallest quadruple byte', function () {
      expect(VLQ.encode([0x200000])).toEqual([0x81, 0x80, 0x80, 0]);
    });

    it('arbitrary quadruple byte', function () {
      expect(VLQ.encode([0x8000000])).toEqual([0xc0, 0x80, 0x80, 0]);
    });

    it('largest quadruple byte', function () {
      expect(VLQ.encode([0xfffffff])).toEqual([0xff, 0xff, 0xff, 0x7f]);
    });

    it('smallest quintuple byte', function () {
      expect(VLQ.encode([0x10000000])).toEqual([0x81, 0x80, 0x80, 0x80, 0]);
    });

    it('arbitrary quintuple byte', function () {
      expect(VLQ.encode([0xff000000])).toEqual([0x8f, 0xf8, 0x80, 0x80, 0]);
    });

    it('maximum 32-bit integer input', function () {
      expect(VLQ.encode([0xffffffff])).toEqual([0x8f, 0xff, 0xff, 0xff, 0x7f]);
    });

    it('two single-byte values', function () {
      expect(VLQ.encode([0x40, 0x7f])).toEqual([0x40, 0x7f]);
    });

    it('two multi-byte values', function () {
      expect(VLQ.encode([0x4000, 0x123456])).toEqual([0x81, 0x80, 0, 0xc8, 0xe8, 0x56]);
    });

    it('many multi-byte values', function () {
      var input = [0x2000, 0x123456, 0xfffffff, 0, 0x3fff, 0x4000];
      var expected = [0xc0, 0, 0xc8, 0xe8, 0x56, 0xff, 0xff, 0xff, 0x7f, 0, 0xff, 0x7f, 0x81, 0x80, 0];
      expect(VLQ.encode(input)).toEqual(expected);
    });
  });

  describe('Decode a series of bytes, producing a series of integers.', function () {
    it('one byte', function () {
      expect(VLQ.decode([0x7f])).toEqual([0x7f]);
    });

    it('two bytes', function () {
      expect(VLQ.decode([0xc0, 0])).toEqual([0x2000]);
    });

    it('three bytes', function () {
      expect(VLQ.decode([0xff, 0xff, 0x7f])).toEqual([0x1fffff]);
    });

    it('four bytes', function () {
      expect(VLQ.decode([0x81, 0x80, 0x80, 0])).toEqual([0x200000]);
    });

    it('maximum 32-bit integer', function () {
      expect(VLQ.decode([0x8f, 0xff, 0xff, 0xff, 0x7f])).toEqual([0xffffffff]);
    });

    it('incomplete sequence causes error', function () {
      expect(function () { VLQ.decode([0xff]); }).toThrow(new Error('Incomplete sequence'));
    });

    it('incomplete sequence causes error, even if value is zero', function () {
      expect(function () { VLQ.decode([0x80]); }).toThrow(new Error('Incomplete sequence'));
    });

    it('multiple values', function () {
      var input = [0xc0, 0, 0xc8, 0xe8, 0x56, 0xff, 0xff, 0xff, 0x7f, 0, 0xff, 0x7f, 0x81, 0x80, 0];
      var expected = [0x2000, 0x123456, 0xfffffff, 0, 0x3fff, 0x4000];
      expect(VLQ.decode(input)).toEqual(expected);
    });
  });
});
