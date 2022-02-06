import { encode, decode } from './atbash-cipher';

describe('Atbash Cipher', () => {
  describe('encode', () => {
    test('encode yes', () => {
      expect(encode('yes')).toEqual('bvh');
    });

    test('encode no', () => {
      expect(encode('no')).toEqual('ml');
    });

    test('encode OMG', () => {
      expect(encode('OMG')).toEqual('lnt');
    });

    test('encode spaces', () => {
      expect(encode('O M G')).toEqual('lnt');
    });

    test('encode mindblowingly', () => {
      expect(encode('mindblowingly')).toEqual('nrmwy oldrm tob');
    });

    test('encode numbers', () => {
      const messageToEncode = 'Testing,1 2 3, testing.';
      const expected = 'gvhgr mt123 gvhgr mt';
      expect(encode(messageToEncode)).toEqual(expected);
    });

    test('encode deep thought', () => {
      const messageToEncode = 'Truth is fiction.';
      const expected = 'gifgs rhurx grlm';
      expect(encode(messageToEncode)).toEqual(expected);
    });

    test('encode all the letters', () => {
      const messageToEncode = 'The quick brown fox jumps over the lazy dog.';
      const expected = 'gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt';
      expect(encode(messageToEncode)).toEqual(expected);
    });
  });

  describe('decode', () => {
    test('decode exercism', () => {
      expect(decode('vcvix rhn')).toEqual('exercism');
    });

    test('decode a sentence', () => {
      const messageToDecode = 'zmlyh gzxov rhlug vmzhg vkkrm thglm v';
      const expected = 'anobstacleisoftenasteppingstone';
      expect(decode(messageToDecode)).toEqual(expected);
    });

    test('decode numbers', () => {
      expect(decode('gvhgr mt123 gvhgr mt')).toEqual('testing123testing');
    });

    test('decode all the letters', () => {
      const messageToDecode = 'gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt';
      const expected = 'thequickbrownfoxjumpsoverthelazydog';
      expect(decode(messageToDecode)).toEqual(expected);
    });

    test('decode with too many spaces', () => {
      expect(decode('vc vix    r hn')).toEqual('exercism');
    });

    test('decode with no spaces', () => {
      const messageToDecode = 'zmlyhgzxovrhlugvmzhgvkkrmthglmv';
      const expected = 'anobstacleisoftenasteppingstone';
      expect(decode(messageToDecode)).toEqual(expected);
    });
  });
});
