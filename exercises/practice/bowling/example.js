export class Bowling {
  constructor() {
    this.maxPins = 10;
    this.maxFrames = 10;
    this.currentFrame = 0;

    this.frames = [];
    this.frameScores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    this.initializeFrame();
  }

  initializeFrame() {
    this.frameRoll = 1;
    this.remainingPins = this.maxPins;
    this.currentFrame = this.currentFrame + 1;
  }

  incrementFrame() {
    this.frameRoll = this.frameRoll + 1;
  }

  incrementScore(pins) {
    if (this.currentFrame > this.maxFrames) return;
    this.frameScores[this.currentFrame - 1] += pins;
  }

  scoreStrike() {
    this.frames[this.currentFrame - 1] = 'X';
    this.applyStrikeBonus(this.maxPins);
    this.applySpareBonus(this.maxPins);
    this.incrementFrame();
  }

  scoreFirstRoll(pins) {
    this.remainingPins = this.remainingPins - pins;
    this.applySpareBonus(pins);
    this.applyStrikeBonus(pins);
    this.incrementFrame();
  }

  scoreSpare(pins) {
    this.frames[this.currentFrame - 1] = 'S';
    this.applyStrikeBonus(pins);
    this.incrementFrame();
  }

  scoreOpenFrame(pins) {
    this.frames[this.currentFrame - 1] =
      this.maxPins - this.remainingPins + pins;
    this.applyStrikeBonus(pins);
    this.incrementFrame();
  }

  applySpareBonus(pins) {
    // pins on the first roll after a spare are counted twice (on the frame of spare)
    if (this.frames[this.currentFrame - 2] === 'S') {
      this.frameScores[this.currentFrame - 2] += pins;
    }
  }

  applyStrikeBonus(pins) {
    // on the two rolls after a strike are counted twice (on the frame of the strike)
    if (
      this.frames[this.currentFrame - 3] === 'X' &&
      this.frames[this.currentFrame - 2] === 'X' &&
      this.frameRoll === 1 &&
      this.currentFrame <= this.maxFrames + 2
    ) {
      this.frameScores[this.currentFrame - 3] += pins;
    }
    if (
      this.frames[this.currentFrame - 2] === 'X' &&
      this.currentFrame <= this.maxFrames + 1
    ) {
      this.frameScores[this.currentFrame - 2] += pins;
    }
  }

  isGameOver() {
    if (this.currentFrame <= this.maxFrames) return false;

    if (
      this.frames[this.maxFrames - 1] !== 'X' &&
      this.frames[this.maxFrames - 1] !== 'S'
    )
      return true;

    // spare in the last frame gets no more than bonus roll
    if (this.frames[this.maxFrames - 1] === 'S' && this.frameRoll > 1)
      return true;

    // bonus roll after the spare in the last frame may get a strike but then the games ends
    // without another roll
    if (
      this.frames[this.maxFrames - 1] === 'S' &&
      this.frames[this.maxFrames] === 'X'
    )
      return true;

    if (this.frames[this.maxFrames - 1] === 'X') {
      // if the first bonus roll is not a strike then finish the bonus frame
      if (
        this.frames[this.maxFrames] !== 'X' &&
        this.currentFrame > this.maxFrames + 1
      )
        return true;

      if (this.frames[this.maxFrames] === 'X') {
        // if the second bonus roll is a strike, but was still used, the game is over
        if (this.frames[this.maxFrames + 1] !== 'X' && this.frameRoll > 1)
          return true;
        // if the second bonus roll is a strike the game is over
        if (this.frames[this.maxFrames + 1] === 'X') return true;
      }
    }
    return false;
  }

  roll(pins) {
    if (pins < 0) {
      throw new Error('Negative roll is invalid');
    }

    if (pins > this.remainingPins) {
      throw new Error('Pin count exceeds pins on the lane');
    }

    if (this.isGameOver()) {
      throw new Error('Cannot roll after game is over');
    }

    this.incrementScore(pins);

    if (this.frameRoll === 1) {
      if (pins === this.maxPins) {
        this.scoreStrike();
        this.initializeFrame();
      } else {
        this.scoreFirstRoll(pins);
      }
    } else {
      if (pins === this.remainingPins) {
        this.scoreSpare(pins);
      } else {
        this.scoreOpenFrame(pins);
      }
      this.initializeFrame();
    }
  }

  score() {
    if (!this.isGameOver()) {
      throw new Error('Score cannot be taken until the end of the game');
    }
    return this.frameScores.reduce((total, num) => total + num);
  }
}
