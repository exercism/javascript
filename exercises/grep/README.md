# Grep

Search a file for lines matching a regular expression pattern. Return the line
number and contents of each matching line.

The Unix [`grep`](http://pubs.opengroup.org/onlinepubs/9699919799/utilities/grep.html) command can be used to search for lines in one or more files
that match a user-provided search query (known as the *pattern*).

The `grep` command takes three arguments:

1. The pattern used to match lines in a file.
2. Zero or more flags to customize the matching behavior.
3. One or more files in which to search for matching lines.

Your task is to implement the `grep` function, which should read the contents
of the specified files, find the lines that match the specified pattern
and then output those lines as a single string. Note that the lines should
be output in the order in which they were found, with the first matching line
in the first file being output first.

As an example, suppose there is a file named "input.txt" with the following contents:

```text
hello
world
hello again
```

If we were to call `grep "hello" input.txt`, the returned string should be:

```text
hello
hello again
```

### Flags

As said earlier, the `grep` command should also support the following flags:

- `-n` Print the line numbers of each matching line.
- `-l` Print only the names of files that contain at least one matching line.
- `-i` Match line using a case-insensitive comparison.
- `-v` Invert the program -- collect all lines that fail to match the pattern.
- `-x` Only match entire lines, instead of lines that contain a match.

If we run `grep -n "hello" input.txt`, the `-n` flag will require the matching
lines to be prefixed with its line number:

```text
1:hello
3:hello again
```

And if we run `grep -i "HELLO" input.txt`, we'll do a case-insensitive match,
and the output will be:

```text
hello
hello again
```

The `grep` command should support multiple flags at once.

For example, running `grep -l -v "hello" file1.txt file2.txt` should
print the names of files that do not contain the string "hello".

### Node process

Unlike other exercises, `grep.js` is _not_ imported inside the test file `grep.spec.js`. Instead, it will be used as if it's an executable. To facilitate that, the `grep.js` file has been set-up with a shebang, and a comment that explains what this does:

```javascript
#!/usr/bin/env node

// The above line is a shebang. On Unix-like operating systems, or environments,
// this will allow the script to be run by node, and thus turn this JavaScript
// file into an executable. In other words, to execute this file, you may run
// the following from your terminal:
//
// ./grep.js args
//
// If you do not have a Unix-like operating system or environment, for example
// Windows without WSL, you can use the following inside a window terminal,
// such as cmd.exe:
//
// node grep.js args
//
// Read more about shebangs here: https://en.wikipedia.org/wiki/Shebang_(Unix)
```

The tests will start a new node _process_, executing `grep.js`.

### Reading arguments

In order to retrieve the arguments the _process_ was started with, use `process.argv`.

### Reading files

The function `readLines` has been provided. There is no need to transform the file path in order to use it. The `readlines` function will _resolve_ the path from the current working directory, which, for the `grep.js` processes is set to the exercise directory.

### Writing output

In order to write output use

- `console.log` to write to the standard output stream,
- `console.error` to write to the standard error stream.

The tests consider execution to be successful (resolved) if nothing is written to the standard error stream, and not successful (rejected) if something is written to the standard error stream.


## Setup

Go through the setup instructions for Javascript to install the necessary
dependencies:

[https://exercism.io/tracks/javascript/installation](https://exercism.io/tracks/javascript/installation)

## Requirements

Please `cd` into exercise directory before running all below commands.

Install assignment dependencies:

```bash
$ npm install
```

## Making the test suite pass

Execute the tests with:

```bash
$ npm test
```

In the test suites all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by changing `xtest` to
`test`.


## Submitting Solutions

Once you have a solution ready, you can submit it using:

```bash
exercism submit grep.js
```

## Submitting Incomplete Solutions

It's possible to submit an incomplete solution so you can see how others have
completed the exercise.

## Exercise Source Credits

Conversation with Nate Foster. [http://www.cs.cornell.edu/Courses/cs3110/2014sp/hw/0/ps0.pdf](http://www.cs.cornell.edu/Courses/cs3110/2014sp/hw/0/ps0.pdf)

