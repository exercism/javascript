import HelloWorld from './hello-world';

describe('Hello World', () => {
  const greeter = new HelloWorld();

  test('says hello', () => {
    expect(greeter.hello()).toEqual('Hello, World!');
  });
});
