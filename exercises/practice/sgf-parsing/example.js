export function parse(input) {
  if (!input.startsWith('(')) {
    throw new Error('tree missing');
  }

  const parser = new SgfParser(input);
  return parser.parseTree();
}

class SgfParser {
  constructor(input) {
    this.input = input;
    this.pos = 0;
  }

  peek() {
    return this.input[this.pos];
  }

  consume() {
    return this.input[this.pos++];
  }

  parseTree() {
    if (this.peek() !== '(') {
      throw new Error('tree missing');
    }
    this.consume(); // consume '('

    if (this.peek() === ')') {
      throw new Error('tree with no nodes');
    }

    const root = this.parseNode();

    this.consume(); // consume ')'

    return root;
  }

  parseNode() {
    if (this.peek() !== ';') {
      throw new Error('tree missing');
    }
    this.consume(); // consume ';'

    const node = { properties: {}, children: [] };

    // Parse properties of this node
    while (this.pos < this.input.length && /[A-Za-z]/.test(this.peek())) {
      const { key, values } = this.parseProperty();
      node.properties[key] = values;
    }

    // Parse subsequent nodes or child trees
    while (this.pos < this.input.length && this.peek() !== ')') {
      if (this.peek() === ';') {
        // Next node in sequence becomes the single child
        const child = this.parseNode();
        node.children.push(child);
        break; // parseNode handles its own children recursively
      } else if (this.peek() === '(') {
        // Variation: a child tree
        const child = this.parseTree();
        node.children.push(child);
      } else {
        break;
      }
    }

    return node;
  }

  parseProperty() {
    let key = '';

    // Read key characters (must be uppercase letters)
    while (this.pos < this.input.length && /[A-Za-z]/.test(this.peek())) {
      key += this.consume();
    }

    if (!/^[A-Z]+$/.test(key)) {
      throw new Error('property must be in uppercase');
    }

    if (this.peek() !== '[') {
      throw new Error('properties without delimiter');
    }

    const values = [];

    // A property can have multiple values: KEY[val1][val2]...
    while (this.peek() === '[') {
      this.consume(); // consume '['
      values.push(this.parseValue());
      this.consume(); // consume ']'
    }

    return { key, values };
  }

  parseValue() {
    let value = '';

    while (this.pos < this.input.length && this.peek() !== ']') {
      const ch = this.consume();

      if (ch === '\\') {
        const next = this.consume();
        if (next === '\n') {
          // escaped newline: remove entirely
        } else if (next === '\r') {
          // handle \r\n
          if (this.peek() === '\n') this.consume();
        } else if (next === '\t') {
          // escaped tab -> space
          value += ' ';
        } else {
          // any other escaped char: keep the char, drop the backslash
          value += next;
        }
      } else if (ch === '\t') {
        // unescaped tab -> space
        value += ' ';
      } else {
        value += ch;
      }
    }

    return value;
  }
}
