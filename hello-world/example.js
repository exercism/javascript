
class HelloWorld {
    hello(name) {
        name = name || 'world';
        return `Hello, ${name}!`;
    }
}

module.exports = HelloWorld;

