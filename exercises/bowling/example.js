class Bowling {
  constructor() {
    this.rolls = [];
    this.numberOfFrames = 10;
    this.maximumFrameScore = 10;
  }

  roll(pins) {
    this.rolls = [...this.rolls, pins];
  }

  correctNumberOfRolls(frameIndex) {
    return frameIndex === this.rolls.length;
  }

  isStrike(frameIndex) {
    return this.rolls[frameIndex] === this.maximumFrameScore;
  }

  isSpare(frameIndex) {
    return (
      this.rolls[frameIndex] + this.rolls[frameIndex + 1] ===
      this.maximumFrameScore
    );
  }

  strikeBonus(frameIndex) {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }

  spareBonus(frameIndex) {
    return this.rolls[frameIndex + 2];
  }

  frameScore(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  }

  score() {
    let score = 0;
    let frameIndex = 0;

    for (let i = 1; i <= this.numberOfFrames; i += 1) {
      if (this.rolls.length <= frameIndex) {
        throw new Error('Score cannot be taken until the end of the game');
      }

      if (this.isStrike(frameIndex)) {
        if (this.rolls.length <= frameIndex + 2) {
          throw new Error('Score cannot be taken until the end of the game');
        }

        const strikeBonus = this.strikeBonus(frameIndex);
        if (
          strikeBonus > this.maximumFrameScore && !this.isStrike(frameIndex + 1)
        ) {
          throw new Error('Pin count exceeds pins on the lane');
        }

        score += 10 + strikeBonus;
        frameIndex += i === this.numberOfFrames ? 3 : 1;
      } else if (this.isSpare(frameIndex)) {
        if (this.rolls.length <= frameIndex + 2) {
          throw new Error('Score cannot be taken until the end of the game');
        }

        score += 10 + this.spareBonus(frameIndex);
        frameIndex += i === this.numberOfFrames ? 3 : 2;
      } else {
        const frameScore = this.frameScore(frameIndex);
        if (frameScore < 0) {
          throw new Error('Negative roll is invalid');
        } else if (frameScore > 10) {
          throw new Error('Pin count exceeds pins on the lane');
        }

        score += frameScore;
        frameIndex += 2;
      }
    }

    if (!this.correctNumberOfRolls(frameIndex)) {
      throw new Error('Cannot roll after game is over');
    }

    return score;
  }
}

export default Bowling;
