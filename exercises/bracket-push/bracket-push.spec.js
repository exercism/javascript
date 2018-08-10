import { bracketPush } from './bracket-push';

describe('bracket push', () => {
  test('checks for appropriate bracketing in a set of brackets', () => {
    expect(bracketPush('{}')).toEqual(true);
  });

  xtest('returns false for unclosed brackets', () => {
    expect(bracketPush('{{')).toEqual(false);
  });

  xtest('returns false if brackets are out of order', () => {
    expect(bracketPush('}{')).toEqual(false);
  });

  xtest('checks bracketing in more than one pair of brackets', () => {
    expect(bracketPush('{}[]')).toEqual(true);
  });

  xtest('checks bracketing in nested brackets', () => {
    expect(bracketPush('{[]}')).toEqual(true);
  });

  xtest('rejects brackets that are properly balanced but improperly nested', () => {
    expect(bracketPush('{[}]')).toEqual(false);
  });

  xtest('checks bracket closure with deeper nesting', () => {
    expect(bracketPush('{[)][]}')).toEqual(false);
  });

  xtest('checks bracket closure in a long string of brackets', () => {
    expect(bracketPush('{[]([()])}')).toEqual(true);
  });
});
