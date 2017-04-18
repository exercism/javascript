import helloWorld from './hello-world';

describe('Hello World', () => {
  it('says hello', () => {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
