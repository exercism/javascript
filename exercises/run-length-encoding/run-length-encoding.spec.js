var RLE = require('./run-length-encoding');

describe('Run-length encoding', function () {
  it('encode empty string', function () {
    expect(RLE.encode('')).toEqual('');
  });

  xit('encode single characters only', function () {
    expect(RLE.encode('XYZ')).toEqual('XYZ');
  });

  xit('decode empty string', function () {
    expect(RLE.decode('')).toEqual('');
  });

  xit('decode single characters only', function () {
    expect(RLE.decode('XYZ')).toEqual('XYZ');
  });

  xit('encode simple', function () {
    expect(RLE.encode('AABBBCCCC')).toEqual('2A3B4C');
  });

  xit('decode simple', function () {
    expect(RLE.decode('2A3B4C')).toEqual('AABBBCCCC');
  });

  xit('encode with single values', function () {
    expect(RLE.encode('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB')).toEqual('12WB12W3B24WB');
  });

  xit('decode with single values', function () {
    expect(RLE.decode('12WB12W3B24WB')).toEqual('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB');
  });

  xit('decode(encode(...))combination', function () {
    expect(RLE.decode(RLE.encode('zzz ZZ  zZ'))).toEqual('zzz ZZ  zZ');
  });
});
