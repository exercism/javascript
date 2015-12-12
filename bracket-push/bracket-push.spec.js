import bracket from './bracket-push';

describe('bracket push', () => {
  it('checks for appropriate bracketing in a set of brackets', () => {
    expect(bracket('{}')).toEqual(true);
  });

  xit('returns false for unclosed brackets', () => {
    expect(bracket('{{')).toEqual(false);
  });

  xit('returns false if brackets are out of order', () => {
    expect(bracket('}{')).toEqual(false);
  });

  xit('checks bracketing in more than one pair of brackets', () => {
    expect(bracket('{}[]')).toEqual(true);
  });

  xit('checks bracketing in nested brackets', () => {
    expect(bracket('{[]}')).toEqual(true);
  });

  xit('rejects brackets that are properly balanced but improperly nested', () => {
    expect(bracket('{[}]')).toEqual(false);
  });

  xit('checks bracket closure with deeper nesting', () => {
    expect(bracket('{[)][]}')).toEqual(false);
  });

  xit('checks bracket closure in a long string of brackets', () => {
    expect(bracket('{[]([()])}')).toEqual(true);
  });
});
