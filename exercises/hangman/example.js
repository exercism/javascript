export const GAME_STATUS = {
  WIN: 'win',
  LOSS: 'loss',
  ONGOING: 'ongoing'
}

export class Hangman {
  constructor(word) {
    this.remaining_guesses = 9
    this.status = GAME_STATUS.ONGOING
    this.word = word
    this.guesses = []
    this.maskedWord = '_'.repeat(this.word.length)
  }

  guess(char) {
    if (this.status != GAME_STATUS.ONGOING) {
      throw new Error(`Game is over, status: ${this.status}.`)
    }
    if (this.word.split('').indexOf(char) >= 0 && this.guesses.indexOf(char) < 0) {
      this.guesses.push(char)
      this.updateMaskedWord()
    } else {
      this.remaining_guesses -= 1
    }
    this.updateStatus()
  }

  updateMaskedWord() {
    this.maskedWord = ''
    for (var i = 0; i < this.word.length; i++) {
      const letter = this.word[i]
      if (this.guesses.indexOf(letter) >= 0) {
        this.maskedWord += letter
      } else {
        this.maskedWord += '_'
      }
    }
  }

  updateStatus() {
    if (this.remaining_guesses < 0) {
      this.status = GAME_STATUS.LOSS
    } else if (this.maskedWord === this.word) {
      this.status = GAME_STATUS.WIN
    }
  }

  getMaskedWord() {
    return this.maskedWord
  }

  getStatus() {
    return this.status
  }

  getRemainingGuesses() {
    return this.remaining_guesses
  }
}
