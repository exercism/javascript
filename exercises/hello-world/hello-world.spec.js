import HelloWorld from './hello-world';

describe('Hello World', () => {
  const greeter = new HelloWorld();

  it('says hello', () => {
    expect(greeter.hello()).toEqual('Hello, World!');
  });
});
