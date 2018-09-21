import { hello } from './hello-world';

describe('Hello World', () => {
  test('says hello', () => {
    expect(hello()).toEqual('Hello, World!');
  });
});
