import { encode } from './atbash-cipher';

describe('encode', () => {
  test('encodes no', () => expect(encode('no')).toEqual('ml'));

  xtest('encodes yes', () => expect(encode('yes')).toEqual('bvh'));

  xtest('encodes OMG', () => expect(encode('OMG')).toEqual('lnt'));

  xtest('encodes O M G', () => expect(encode('O M G')).toEqual('lnt'));

  xtest('encodes long words', () => expect(encode('mindblowingly')).toEqual('nrmwy oldrm tob'));

  xtest('encodes numbers', () => expect(encode('Testing, 1 2 3, testing.'))
    .toEqual('gvhgr mt123 gvhgr mt'));

  xtest('encodes sentences', () => expect(encode('Truth is fiction.')).toEqual('gifgs rhurx grlm'));

  xtest('encodes all the things', () => expect(encode('The quick brown fox jumps over the lazy dog.'))
    .toEqual('gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt'));
});
