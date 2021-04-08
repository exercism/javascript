FIXME;

import { needsLicense } from './high-score-board';

describe('needsLicense', () => {
  test('requires a license for a car', () => {
    expect(needsLicense('car')).toBe(true);
  });
});
