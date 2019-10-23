import { Hangman, GAME_STATUS } from './hangman';

describe('Hangman', () => {
  test('Initially 9 failures are allowed', () => {
    let game = new Hangman('foo')
    expect(game.getStatus()).toEqual(GAME_STATUS.ONGOING)
    expect(game.getRemainingGuesses()).toEqual(9)
  })

  xtest('Initially all letters are blanks and unguessed', () => {
    let game = new Hangman('apple')
    expect(game.getMaskedWord()).toEqual('_____')
  })

  xtest('After 10 failures, the game is over', () => {
    let game = new Hangman('banana')
    let counter = 9
    while (counter > 0) {
      game.guess('z')
      counter -= 1
    }
    expect(game.getMaskedWord()).toEqual('______')
    try {
      game.guess('z')
    } catch (e) {
      expect(e).toBe(new Error('Game is over, status: loss.'))
    }
    expect(game.getMaskedWord()).toEqual('______')
    expect(game.getStatus()).toEqual(GAME_STATUS.LOSS)
  })

  xtest('Entering a correct letter removes correct underscores', () => {
    let game = new Hangman('orange')
    game.guess('g')
    expect(game.getMaskedWord()).toEqual('____g_')
    game.guess('a')
    expect(game.getMaskedWord()).toEqual('__a_g_')
  })

  xtest('Entering a correct letter twice counts as a failure', () => {
    let game = new Hangman('pear')
    game.guess('e')
    expect(game.getMaskedWord()).toEqual('_e__')
    expect(game.getRemainingGuesses()).toEqual(9)
    game.guess('e')
    expect(game.getMaskedWord()).toEqual('_e__')
    expect(game.getRemainingGuesses()).toEqual(8)
  })

  xtest('Guessing all letters correctly results in a win', () => {
    let game = new Hangman('peach')
    game.guess('p')
    expect(game.getMaskedWord()).toEqual('p____')
    game.guess('e')
    expect(game.getMaskedWord()).toEqual('pe___')
    game.guess('a')
    expect(game.getMaskedWord()).toEqual('pea__')
    game.guess('c')
    expect(game.getMaskedWord()).toEqual('peac_')
    game.guess('h')
    expect(game.getMaskedWord()).toEqual('peach')
    expect(game.getStatus()).toEqual(GAME_STATUS.WIN)
  })

  xtest('Winning on last guess still results in a win', () => {
    let game = new Hangman('yyyyy')
    let counter = 9
    while (counter > 0) {
      game.guess('h')
      counter -= 1
    }
    expect(game.getMaskedWord()).toEqual('_____')
    game.guess('y')
    expect(game.getMaskedWord()).toEqual('yyyyy')
    expect(game.getStatus()).toEqual(GAME_STATUS.WIN)
  })
});
