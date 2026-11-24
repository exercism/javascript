import { describe, expect, test } from '@jest/globals';
import { hello } from './hello-world.js';

describe('Hello World', () => {
  test('Say Hi!', () => {
    expect(hello()).toEqual('Hello, World!');
  });
});
