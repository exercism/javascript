import HelloWorld from './hello-world';

describe('Hello World', () => {
  let greeter = new HelloWorld();

  test('says hello', () => {
    expect(greeter.hello()).toEqual('Hello, World!');
  });
});
