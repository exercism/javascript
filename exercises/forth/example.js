var Forth = function () {
  this.stack = [];
  this.commands = Forth.basicCommands();
};

Forth.prototype.evaluate = function (program) {
  var words = program.toLowerCase().split(' ');

  for (var t = 0; t < words.length; t++) {
    var word = words[t];

    if (/^-?\d+$/.test(word)) {
      // numbers
      this.stack.push(Number(word));
    } else if (word === ':') {
      // word definition
      var semicolon = words.indexOf(';', t);
      if (semicolon === -1) throw new Error('Unterminated definition');
      this.defineCommand(words[t + 1], words.slice(t + 2, semicolon).join(' '));
      t = semicolon;
    } else {
      // commands
      var command = this.commands[word];
      if (!command) throw new Error('Unknown command');
      this.performCommand(command);
    }
  }
};

Forth.prototype.defineCommand = function (word, subprogram) {
  if (Forth.isKeyword(word)) throw new Error('Invalid definition');
  this.commands[word] = {
    arity: 0, // handled inside the call
    execute: this.evaluate.bind(this, subprogram)
  };
};

Forth.prototype.performCommand = function (command) {
  if (command.arity > this.stack.length) throw new Error('Stack empty');

  var args = this.stack.splice(this.stack.length - command.arity);
  var vals = command.execute.apply(this, args);
  this.stack.push.apply(this.stack, vals);
};

Forth.isKeyword = function (word) {
  return word === ':' || word === ';' || /^-?\d+$/.test(word);
};

Forth.basicCommands = function () {
  return {
    '+': { arity: 2, execute: function (a, b) { return [a + b]; } },
    '-': { arity: 2, execute: function (a, b) { return [a - b]; } },
    '*': { arity: 2, execute: function (a, b) { return [a * b]; } },
    '/': { arity: 2, execute: function (a, b) {
      if (b === 0) throw new Error('Division by zero');
      return [Math.floor(a / b)];
    } },
    dup: { arity: 1, execute: function (a) { return [a, a]; } },
    drop: { arity: 1, execute: function () {} },
    swap: { arity: 2, execute: function (a, b) { return [b, a]; } },
    over: { arity: 2, execute: function (a, b) { return [a, b, a]; } }
  };
};

module.exports = Forth;
