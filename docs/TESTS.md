With the first few exercises, you will get a skeleton file with the exported modules.
For later ones, you can find more information about modules in the [node documentation](http://nodejs.org/api/modules.html#modules_module_exports).

For running tests, install `jasmine` as described in the [Installing Javascript section](http://exercism.io/languages/javascript/installation).
Move to the folder where that exercise's files are located (a path similar to {EXERCISM_HOME_DIR}/javascript/{EXERCISE}).

    cd ~/exercism/javascript/bob
    jasmine bob_test.spec.js

Only the first test will be executed, all the others have been marked pending using `xit` or `xdescribe`.
As you keep solving the exercise, one by one change all `xit` and `xdescribe` to `it` and `describe` respectively to run all the tests.
See [Test Driven Development (TDD)](https://en.wikipedia.org/wiki/Test-driven_development) to know more about this approach.
When all tests pass, you are ready to submit!


## Visual Studio on Windows

You can use any editor of your choice to write javascript. Here are just some instructions for using and running tests in `Visual Studio`.
You are free to skip this section if you are not using `Visual Studio` on `Windows`.

Install [Visual Studio Express 2013 for web](http://www.visualstudio.com/en-us/products/visual-studio-express-vs.aspx). This will include the IDE and web development tools.

To get started, you can download a Visual Studio solution that is already set up to work with JavaScript and the other languages that Visual Studio supports.

![Solution Explorer](/docs/img/SolutionExplorer.png)

1. Download the [Exercism.io Visual Studio Template](https://github.com/rprouse/Exercism.VisualStudio) from GitHub by clicking the Download Zip button on the page.
2. Unzip the template into your exercises directory, for example `C:\src\exercises`
2. Install the [Exercism CLI](http://exercism.io/clients/cli)
3. Open a command prompt to your exercise directory
4. Add your API key to exercism `exercism configure --key=YOUR_API_KEY`
5. Configure your source directory in exercism `exercism configure --dir=C:\src\exercises`
6. [Fetch your first exercise](http://exercism.io/languages/javascript) `exercism fetch javascript`
7. Open the Exercism solution in Visual Studio
8. Expand the Exercism.javascript project
9. Click on **Show All Files** in Solution Explorer (See below)
10. The exercise you just fetched will appear greyed out. Right click on the folder and **Include In Project**
11. Get coding...

![Add files](/docs/img/AddFiles.png)

If you have a paid version of Visual Studio, you should install the [Web Essentials](http://vswebessentials.com/) extension. It will make working with Javascript much easier.

You can run the unit tests from a node.js command line using the batch file in the project.

    C:\Src\exercises\javascript>test example\bob_test.spec.js
    .................

    Finished in 0.02 seconds
    17 tests, 17 assertions, 0 failures, 0 skipped

If you do not see any output from running the tests, you are likely not in a Node.js command prompt.

## Setting Up a Linter

** Note: This section is completely optional **

A linter is like a tester for your code's style and formatting. In some languages there are many acceptable styles, and using a linter allows you to be internally consistent (e.g. Ruby), or adhere to one of many common styles. In other languages there are fewer choices, and a linter allows programmers to look at code from a great variety of sources and still feel at home (e.g. Go). You can read more [here](https://en.wikipedia.org/wiki/Lint_(software)).

The old standard linter for JavaScript is [JSLint](http://jslint.com). However, it is controversially picky. [JSHint](http://jshint.com) is another popular linter. We suggest using [ESLint](http://eslint.org), which is more customizable than either JSLint or JSHint, and is well-run.

To get started using ESLint, follow the instructions [here](http://eslint.org/docs/user-guide/command-line-interface.html). Once you have ESLint installed, you'll be able to lint your code with a simple `eslint [options] [file|dir]*` command. Eg, if you're in the hello-world directory, `eslint .` would lint all files in that directory.
