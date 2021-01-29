import { encode, decode } from './run-length-encoding';

describe('run-length encode a string', () => {
  test('encode empty string', () => {
    expect(encode('')).toEqual('');
  });

  xtest('single characters only are encoded without count', () => {
    expect(encode('XYZ')).toEqual('XYZ');
  });

  xtest('encode string with no single characters', () => {
    expect(encode('AABBBCCCC')).toEqual('2A3B4C');
  });

  xtest('encode string with single characters mixed with repeated characters', () => {
    expect(
      encode('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB')
    ).toEqual('12WB12W3B24WB');
  });

  xtest('encode string with multiple whitespaces', () => {
    expect(encode('  hsqq qww  ')).toEqual('2 hs2q q2w2 ');
  });

  xtest('encode string with lowercase characters', () => {
    expect(encode('aabbbcccc')).toEqual('2a3b4c');
  });
});

describe('run-length decode a string', () => {
  xtest('decode empty string', () => {
    expect(decode('')).toEqual('');
  });

  xtest('decode string with single characters only', () => {
    expect(decode('XYZ')).toEqual('XYZ');
  });

  xtest('decode string with no single characters', () => {
    expect(decode('2A3B4C')).toEqual('AABBBCCCC');
  });

  xtest('decode string with single characters mixed with repeated characters', () => {
    expect(decode('12WB12W3B24WB')).toEqual(
      'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB'
    );
  });

  xtest('decode string with multiple whitespaces', () => {
    expect(decode('2 hs2q q2w2 ')).toEqual('  hsqq qww  ');
  });

  xtest('decode string with lowercase characters', () => {
    expect(decode('2a3b4c')).toEqual('aabbbcccc');
  });
});

describe('run-length encode and then decode', () => {
  xtest('encode followed by decode gives original string', () => {
    expect(decode(encode('zzz ZZ  zZ'))).toEqual('zzz ZZ  zZ');
  });
});
