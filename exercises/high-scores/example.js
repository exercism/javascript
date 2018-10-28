export class HighScores {
  constructor(scores) {
    this.scores = scores;
  }

  latest() {
    return this.scores[this.scores.length - 1];
  }

  highest() {
    return Math.max(...this.scores);
  }

  top() {
    return this.scores.slice()
      .sort((a, b) => a - b)
      .reverse()
      .slice(0, 3);
  }

  report() {
    if (this.latest() === this.highest()) {
      return `Your latest score was ${this.latest()}. That's your personal best!`;
    }
    return `Your latest score was ${this.latest()}. That's ${this.highest() - this.latest()} short of your personal best!`;
  }
}
