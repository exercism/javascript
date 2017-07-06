import atbash from './atbash-cipher';

describe('encode', () => {

  test('encodes no', () => expect(atbash.encode('no')).toEqual('ml'));

  xtest('encodes yes', () => expect(atbash.encode('yes')).toEqual('bvh'));

  xtest('encodes OMG', () => expect(atbash.encode('OMG')).toEqual('lnt'));

  xtest('encodes O M G', () => expect(atbash.encode('O M G')).toEqual('lnt'));

  xtest('encodes long words', () => expect(atbash.encode('mindblowingly')).toEqual('nrmwy oldrm tob'));

  xtest('encodes numbers', () => expect(atbash.encode('Testing, 1 2 3, testing.'))
    .toEqual('gvhgr mt123 gvhgr mt'));

  xtest('encodes sentences', () => expect(atbash.encode('Truth is fiction.')).toEqual('gifgs rhurx grlm'));

  xtest('encodes all the things', () => expect(atbash.encode('The quick brown fox jumps over the lazy dog.'))
    .toEqual('gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt')
  );

});
