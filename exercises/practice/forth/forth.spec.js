import { Forth } from './forth';

describe('Forth', () => {
  let forth;

  beforeEach(() => {
    forth = new Forth();
  });

  describe('parsing and numbers', () => {
    test('numbers just get pushed onto the stack', () => {
      forth.evaluate('1 2 3 4 5');
      expect(forth.stack).toEqual([1, 2, 3, 4, 5]);
    });

    xtest('pushes negative numbers onto the stack', () => {
      forth.evaluate('-1 -2 -3 -4 -5');
      expect(forth.stack).toEqual([-1, -2, -3, -4, -5]);
    });
  });

  describe('addition', () => {
    xtest('can add two numbers', () => {
      forth.evaluate('1 2 +');
      expect(forth.stack).toEqual([3]);
    });

    xtest('errors if there is nothing on the stack', () => {
      expect(() => {
        forth.evaluate('+');
      }).toThrow(new Error('Stack empty'));
    });

    xtest('errors if there is only one value on the stack', () => {
      expect(() => {
        forth.evaluate('1 +');
      }).toThrow(new Error('Stack empty'));
    });
  });

  describe('subtraction', () => {
    xtest('can subtract two numbers', () => {
      forth.evaluate('3 4 -');
      expect(forth.stack).toEqual([-1]);
    });

    xtest('errors if there is nothing on the stack', () => {
      expect(() => {
        forth.evaluate('-');
      }).toThrow(new Error('Stack empty'));
    });

    xtest('errors if there is only one value on the stack', () => {
      expect(() => {
        forth.evaluate('1 -');
      }).toThrow(new Error('Stack empty'));
    });
  });

  describe('multiplication', () => {
    xtest('can multiply two numbers', () => {
      forth.evaluate('2 4 *');
      expect(forth.stack).toEqual([8]);
    });

    xtest('errors if there is nothing on the stack', () => {
      expect(() => {
        forth.evaluate('*');
      }).toThrow(new Error('Stack empty'));
    });

    xtest('errors if there is only one value on the stack', () => {
      expect(() => {
        forth.evaluate('1 *');
      }).toThrow(new Error('Stack empty'));
    });
  });

  describe('division', () => {
    xtest('can divide two numbers', () => {
      forth.evaluate('12 3 /');
      expect(forth.stack).toEqual([4]);
    });

    xtest('performs integer division', () => {
      forth.evaluate('8 3 /');
      expect(forth.stack).toEqual([2]);
    });

    xtest('errors if dividing by zero', () => {
      expect(() => {
        forth.evaluate('4 0 /');
      }).toThrow(new Error('Division by zero'));
    });

    xtest('errors if there is nothing on the stack', () => {
      expect(() => {
        forth.evaluate('/');
      }).toThrow(new Error('Stack empty'));
    });

    xtest('errors if there is only one value on the stack', () => {
      expect(() => {
        forth.evaluate('1 /');
      }).toThrow(new Error('Stack empty'));
    });
  });

  describe('combined arithmetic', () => {
    xtest('addition and subtraction', () => {
      forth.evaluate('1 2 + 4 -');
      expect(forth.stack).toEqual([-1]);
    });

    xtest('multiplication and division', () => {
      forth.evaluate('2 4 * 3 /');
      expect(forth.stack).toEqual([2]);
    });
  });

  describe('dup', () => {
    xtest('copies a value on the stack', () => {
      forth.evaluate('1 dup');
      expect(forth.stack).toEqual([1, 1]);
    });

    xtest('copies the top value on the stack', () => {
      forth.evaluate('1 2 dup');
      expect(forth.stack).toEqual([1, 2, 2]);
    });

    xtest('errors if there is nothing on the stack', () => {
      expect(() => {
        forth.evaluate('dup');
      }).toThrow(new Error('Stack empty'));
    });
  });

  describe('drop', () => {
    xtest('removes the top value on the stack if it is the only one', () => {
      forth.evaluate('1 drop');
      expect(forth.stack).toEqual([]);
    });

    xtest('removes the top value on the stack if it is not the only one', () => {
      forth.evaluate('1 2 drop');
      expect(forth.stack).toEqual([1]);
    });

    xtest('errors if there is nothing on the stack', () => {
      expect(() => {
        forth.evaluate('drop');
      }).toThrow(new Error('Stack empty'));
    });
  });

  describe('swap', () => {
    xtest('swaps the top two values on the stack if they are the only ones', () => {
      forth.evaluate('1 2 swap');
      expect(forth.stack).toEqual([2, 1]);
    });

    xtest('swaps the top two values on the stack if they are not the only ones', () => {
      forth.evaluate('1 2 3 swap');
      expect(forth.stack).toEqual([1, 3, 2]);
    });

    xtest('errors if there is nothing on the stack', () => {
      expect(() => {
        forth.evaluate('swap');
      }).toThrow(new Error('Stack empty'));
    });

    xtest('errors if there is only one value on the stack', () => {
      expect(() => {
        forth.evaluate('1 swap');
      }).toThrow(new Error('Stack empty'));
    });
  });

  describe('over', () => {
    xtest('copies the second element if there are only two', () => {
      forth.evaluate('1 2 over');
      expect(forth.stack).toEqual([1, 2, 1]);
    });

    xtest('copies the second element if there are more than two', () => {
      forth.evaluate('1 2 3 over');
      expect(forth.stack).toEqual([1, 2, 3, 2]);
    });

    xtest('errors if there is nothing on the stack', () => {
      expect(() => {
        forth.evaluate('over');
      }).toThrow(new Error('Stack empty'));
    });

    xtest('errors if there is only one value on the stack', () => {
      expect(() => {
        forth.evaluate('1 over');
      }).toThrow(new Error('Stack empty'));
    });
  });

  describe('user-defined words', () => {
    xtest('can consist of built-in words', () => {
      forth.evaluate(': dup-twice dup dup ;');
      forth.evaluate('1 dup-twice');
      expect(forth.stack).toEqual([1, 1, 1]);
    });

    xtest('execute in the right order', () => {
      forth.evaluate(': countup 1 2 3 ;');
      forth.evaluate('countup');
      expect(forth.stack).toEqual([1, 2, 3]);
    });

    xtest('can override other user-defined words', () => {
      forth.evaluate(': foo dup ;');
      forth.evaluate(': foo dup dup ;');
      forth.evaluate('1 foo');
      expect(forth.stack).toEqual([1, 1, 1]);
    });

    xtest('can override built-in words', () => {
      forth.evaluate(': swap dup ;');
      forth.evaluate('1 swap');
      expect(forth.stack).toEqual([1, 1]);
    });

    xtest('can override built-in operators', () => {
      forth.evaluate(': + * ;');
      forth.evaluate('3 4 +');
      expect(forth.stack).toEqual([12]);
    });

    xtest('can use different words with the same name', () => {
      forth.evaluate(': foo 5 ;');
      forth.evaluate(': bar foo ;');
      forth.evaluate(': foo 6 ;');
      forth.evaluate('bar foo');
      expect(forth.stack).toEqual([5, 6]);
    });

    xtest('can define word that uses word with the same name', () => {
      forth.evaluate(': foo 10 ;');
      forth.evaluate(': foo foo 1 + ;');
      forth.evaluate('foo');
      expect(forth.stack).toEqual([11]);
    });

    xtest('cannot redefine numbers', () => {
      expect(() => {
        forth.evaluate(': 1 2 ;');
      }).toThrow(new Error('Invalid definition'));
    });
    xtest('cannot redefine negative numbers', () => {
      expect(() => {
        forth.evaluate(': -1 2 ;');
      }).toThrow(new Error('Invalid definition'));
    });

    xtest('errors if executing a non-existent word', () => {
      expect(() => {
        forth.evaluate('foo');
      }).toThrow(new Error('Unknown command'));
    });

    xtest('only defines locally', () => {
      const first = new Forth();
      const second = new Forth();
      first.evaluate(': + - ;');
      first.evaluate('1 1 +');
      second.evaluate('1 1 +');
      expect(first.stack).toEqual([0]);
      expect(second.stack).toEqual([2]);
    });
  });

  describe('case-insensitivity', () => {
    xtest('DUP is case-insensitive', () => {
      forth.evaluate('1 DUP Dup dup');
      expect(forth.stack).toEqual([1, 1, 1, 1]);
    });

    xtest('DROP is case-insensitive', () => {
      forth.evaluate('1 2 3 4 DROP Drop drop');
      expect(forth.stack).toEqual([1]);
    });

    xtest('SWAP is case-insensitive', () => {
      forth.evaluate('1 2 SWAP 3 Swap 4 swap');
      expect(forth.stack).toEqual([2, 3, 4, 1]);
    });

    xtest('OVER is case-insensitive', () => {
      forth.evaluate('1 2 OVER Over over');
      expect(forth.stack).toEqual([1, 2, 1, 2, 1]);
    });

    xtest('user-defined words are case-insensitive', () => {
      forth.evaluate(': foo dup ;');
      forth.evaluate('1 FOO Foo foo');
      expect(forth.stack).toEqual([1, 1, 1, 1]);
    });

    xtest('definitions are case-insensitive', () => {
      forth.evaluate(': SWAP DUP Dup dup ;');
      forth.evaluate('1 swap');
      expect(forth.stack).toEqual([1, 1, 1, 1]);
    });
  });
});
