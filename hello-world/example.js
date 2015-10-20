
class HelloWorld {
    hello(name) {
        name = name || 'World';
        return `Hello, ${name}!`;
    }
}

export default HelloWorld;

