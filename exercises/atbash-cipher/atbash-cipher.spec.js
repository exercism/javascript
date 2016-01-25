import atbash from './atbash-cipher';

describe('encode', () => {

  it('encodes no', () => expect(atbash.encode('no')).toEqual('ml'));

  xit('encodes yes', () => expect(atbash.encode('yes')).toEqual('bvh'));

  xit('encodes OMG', () => expect(atbash.encode('OMG')).toEqual('lnt'));

  xit('encodes O M G', () => expect(atbash.encode('O M G')).toEqual('lnt'));

  xit('encodes long words', () => expect(atbash.encode('mindblowingly')).toEqual('nrmwy oldrm tob'));

  xit('encodes numbers', () => expect(atbash.encode('Testing, 1 2 3, testing.'))
    .toEqual('gvhgr mt123 gvhgr mt'));

  xit('encodes sentences', () => expect(atbash.encode('Truth is fiction.')).toEqual('gifgs rhurx grlm'));

  xit('encodes all the things', () => expect(atbash.encode('The quick brown fox jumps over the lazy dog.'))
    .toEqual('gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt')
  );

});
