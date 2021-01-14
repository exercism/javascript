export class Forth {
  constructor(stack = [], commands = Forth.basicCommands()) {
    this.stack = stack;
    this.commands = commands;
  }

  evaluate(program) {
    const words = program.toLowerCase().split(' ');

    for (let t = 0; t < words.length; t++) {
      const word = words[t];

      // numbers
      if (/^-?\d+$/.test(word)) {
        this.stack.push(Number(word));

        // word definition
      } else if (word === ':') {
        const semicolon = words.indexOf(';', t);

        if (semicolon === -1) {
          throw new Error('Unterminated definition');
        }

        this.defineCommand(
          words[t + 1],
          words.slice(t + 2, semicolon).join(' ')
        );

        t = semicolon;

        // commands
      } else {
        const command = this.commands[word];

        if (!command) {
          throw new Error('Unknown command');
        }

        this.performCommand(command);
      }
    }
  }

  defineCommand(word, subprogram) {
    if (Forth.isKeyword(word)) {
      throw new Error('Invalid definition');
    }

    let execute;

    // Evaluate subprogram immediately if possible, otherwise evaluate later
    try {
      const stackSize = this.stack.length;
      this.evaluate(subprogram);
      const result = this.stack.splice(stackSize);
      execute = () => result;
    } catch {
      execute = this.evaluate.bind(this, subprogram);
    }

    this.commands[word] = {
      arity: 0, // handled inside the call
      execute,
    };
  }

  performCommand(command) {
    if (command.arity > this.stack.length) {
      throw new Error('Stack empty');
    }

    const args = this.stack.splice(this.stack.length - command.arity);
    const vals = command.execute.apply(this, args);
    this.stack.push.apply(this.stack, vals);
  }

  static isKeyword(word) {
    return word === ':' || word === ';' || /^-?\d+$/.test(word);
  }

  static basicCommands() {
    return {
      '+': { arity: 2, execute: (a, b) => [a + b] },
      '-': { arity: 2, execute: (a, b) => [a - b] },
      '*': { arity: 2, execute: (a, b) => [a * b] },
      '/': {
        arity: 2,
        execute: (a, b) => {
          if (b === 0) {
            throw new Error('Division by zero');
          }

          return [Math.floor(a / b)];
        },
      },
      dup: { arity: 1, execute: (a) => [a, a] },
      drop: { arity: 1, execute: () => {} },
      swap: { arity: 2, execute: (a, b) => [b, a] },
      over: { arity: 2, execute: (a, b) => [a, b, a] },
    };
  }
}
