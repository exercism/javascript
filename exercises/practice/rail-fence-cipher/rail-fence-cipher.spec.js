import { encode, decode } from './rail-fence-cipher';

describe('Rail Fence Cipher', () => {
  describe('encode', () => {
    test('encode with two rails', () => {
      const fence = encode('XOXOXOXOXOXOXOXOXO', 2);
      expect(fence).toEqual('XXXXXXXXXOOOOOOOOO');
    });
    test('encode with three rails', () => {
      const fence = encode('WEAREDISCOVEREDFLEEATONCE', 3);
      expect(fence).toEqual('WECRLTEERDSOEEFEAOCAIVDEN');
    });
    test('encode with ending in the middle', () => {
      const fence = encode('EXERCISES', 4);
      expect(fence).toEqual('ESXIEECSR');
    });
  });
  describe('decode', () => {
    test('decode with three rails', () => {
      const fence = decode('TEITELHDVLSNHDTISEIIEA', 3);
      expect(fence).toEqual('THEDEVILISINTHEDETAILS');
    });
    test('decode with five rails', () => {
      const fence = decode('EIEXMSMESAORIWSCE', 5);
      expect(fence).toEqual('EXERCISMISAWESOME');
    });
    test('decode with six rails', () => {
      const encodedString =
        '133714114238148966225439541018335470986172518171757571896261';
      const fence = decode(encodedString, 6);
      const expectedString =
        '112358132134558914423337761098715972584418167651094617711286';
      expect(fence).toEqual(expectedString);
    });
  });
});
