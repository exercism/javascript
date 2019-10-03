ECMAScript is the [standard][web-ecma] that defines JavaScript, a programming 
language that allows web pages to be dynamic. It is an interpreted language, 
which means that it doesn't need to be compiled: instead the 
interpreter (such as a web browser) will parse the code and turn it into code that 
their machine can run - suitable for creating dynamic websites that can run on 
any browser\* on any computer\*!

JavaScript is not only for use in the browser. JavaScript runtimes, such as
[NodeJS][web-nodejs] and [deno][web-deno] allow you to write, launch and
serve requests on webservers. Other frameworks, such as [Electron][web-electron]
use JavaScript to write _cross platform applications_ for Windows, Linux and
Mac OS. Mobile app development is also a possibility, utilising [react-native][web-react-native],
[ionic][web-ionic] and various others, with [expo][web-expo] now allowing to
target Android, iOS and the web, all at once.

> ECMAScript has grown to be one of the world’s most widely used general purpose
> programming languages. It is best known as the language embedded in web 
> browsers but has also been widely adopted for server and embedded 
> applications."
— [ECMA International Language Specification][web-ecma-2019]

Starting with the 6th edition (commonly known as ES2015 or ES6) in 2015, a new
edition of the standard will be released each year. The 6th edition was a major
update which brought many enhancements over ES5, including notably template
strings, expressive arrow function syntax, and cleaner syntax for defining
classes.

But because new syntax and features are coming to JavaScript _each year_, 
support for these changes is often incomplete in [current browsers][web-compat-browsers]
and [the latest node][web-compat-node]. This doesn't mean we can't use it. Tools
such as [Babel][web-babel] offer [transpilation][wiki-transpilation] for most
features, allowing us to _write_ as if it's the future.

**Note**: This track supports the latest ECMAScript syntax via Babel and the
[@babel/preset-env][web-babel-preset-env] plugin, and new experimental features 
are enabled with each update of that plugin, matching the release of the 
specifications. It automatically adapts to _your local node_ installation. This
means you don't need to worry about what is and isn't supported.

----

\* There is a [small number of browsers][wiki-javascript-support] that doesn't 
ship with a JavaScript runtime, or that has disabled JavaScript execution by 
default.

[wiki-javascript-support]: https://en.wikipedia.org/wiki/Comparison_of_web_browsers#JavaScript_support
[wiki-transpilation]: https://en.wikipedia.org/wiki/Source-to-source_compiler
[web-ecma]: https://www.ecma-international.org/publications/standards/Standard.htm
[web-ecma-2019]: (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-ecmascript-overview)
[web-nodejs]: https://nodejs.org/en/
[web-deno]: https://deno.land/
[web-electron]: https://electronjs.org/
[web-react-native]: https://facebook.github.io/react-native/
[web-expo]: https://expo.io/
[web-ionic]: https://ionicframework.com/
[web-compat-browsers]: https://kangax.github.io/compat-table/esnext/
[web-compat-node]: https://node.green/#ESNEXT
[web-babel]: https://babeljs.io/
[web-babel-preset-env]: https://babeljs.io/docs/plugins/preset-env/
