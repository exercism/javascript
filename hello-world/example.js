
class HelloWorld {
    hello(name) {
        name = name || 'world';
        return `Hello, ${name}!`;
    }
}

export default HelloWorld;

