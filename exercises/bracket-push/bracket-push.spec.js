import bracket from './bracket-push';

describe('bracket push', () => {
  test('checks for appropriate bracketing in a set of brackets', () => {
    expect(bracket('{}')).toEqual(true);
  });

  xtest('returns false for unclosed brackets', () => {
    expect(bracket('{{')).toEqual(false);
  });

  xtest('returns false if brackets are out of order', () => {
    expect(bracket('}{')).toEqual(false);
  });

  xtest('checks bracketing in more than one pair of brackets', () => {
    expect(bracket('{}[]')).toEqual(true);
  });

  xtest('checks bracketing in nested brackets', () => {
    expect(bracket('{[]}')).toEqual(true);
  });

  xtest('rejects brackets that are properly balanced but improperly nested', () => {
    expect(bracket('{[}]')).toEqual(false);
  });

  xtest('checks bracket closure with deeper nesting', () => {
    expect(bracket('{[)][]}')).toEqual(false);
  });

  xtest('checks bracket closure in a long string of brackets', () => {
    expect(bracket('{[]([()])}')).toEqual(true);
  });
});
