var HelloWorld = require('./hello-world');

describe('Hello World', function () {
  var helloWorld = new HelloWorld();

  it('says hello world', function () {
    expect(helloWorld.hello()).toEqual('Hello, World!');
  });
});
