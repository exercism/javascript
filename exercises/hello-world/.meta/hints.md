## Tutorial

This exercise has two files:

- hello-world.js
- hello-world.spec.js

The first file is where you will write your code.
The second is where the tests are defined.

The tests will check whether your code is doing the right thing.
You don't need to be able to write a test suite from scratch,
but it helps to understand what a test looks like, and what
it is doing.

Open up the test file, hello-world.spec.js.
There is one test inside:

    it('says hello world', function() {
      expect(helloWorld.hello()).toEqual('Hello, World!');
    });

Run the test now, with the following command on the command-line:

    jasmine hello-world.spec.js

The test fails, which makes sense since you've not written any code yet.

The failure looks like this:

    1) Hello World says hello world 
       Message:
          Expected undefined to equal 'Hello, World!'.

There's more, but this is the most important part.

Take a look at that first line:

    1) Hello World says hello world 

Now look at the test definition again:

    it('says hello world', function() {
      // ... more code here ...
    });

The text 'says hello world' is repeated.
This is how you know the test failed.

The failure message explains what is wrong:

    Expected undefined to equal 'Hello, World!'.

This comes from the part of the test definition that says "expect":

    expect(helloWorld.hello()).toEqual('Hello, World!');

It's comparing two values. It is calling

    helloWorld.hello()

and comparing the result to a hard-coded string.

    'Hello, World!'.

So if you look at the failure message again, the hello function
is returning undefined.

Try changing the function in hello-world.js so that it says

    HelloWorld.prototype.hello = function(input) {
        return "chocolate";
    };

Then run the tests again from the command-line:

    jasmine hello-world.spec.js

Notice how it changes the failure message.

Then change the implementation in hello-world.js again, this time to make the test pass.

When you are done, submit your solution to exercism:

    exercism submit hello-world.js
