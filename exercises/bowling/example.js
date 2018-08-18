'use strict';

function Bowling() {
  var maxPins = 10;
  var maxFrames = 10;
  var frames = [];
  var frameScores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  var currentFrame = 0;
  var frameRoll = 1;
  var remainingPins = maxPins;

  initializeFrame();

  function initializeFrame() {
    frameRoll = 1;
    remainingPins = maxPins;
    currentFrame++;
  }

  function incrementScore(pins) {
    if (currentFrame > maxFrames) return;
    frameScores[currentFrame - 1] += pins;
  }

  function scoreStrike() {
    frames[currentFrame - 1] = 'X';
    applyStrikeBonus(maxPins);
    applySpareBonus(maxPins);
    frameRoll++;
  }

  function scoreFirstRoll(pins) {
    remainingPins = remainingPins - pins;
    applySpareBonus(pins);
    applyStrikeBonus(pins);
    frameRoll++;
  }

  function scoreSpare(pins) {
    frames[currentFrame - 1] = 'S';
    applyStrikeBonus(pins);
    frameRoll++;
  }

  function scoreOpenFrame(pins) {
    frames[currentFrame - 1] = (maxPins - remainingPins) + pins;
    applyStrikeBonus(pins);
    frameRoll++;
  }

  function applySpareBonus(pins) {
    // pins on the first roll after a spare are counted twice (on the frame of spare)
    if (frames[currentFrame - 2] === 'S' ) {
      frameScores[currentFrame - 2] += pins;
    }
  }

  function applyStrikeBonus(pins) {
    // on the two rolls after a strike are counted twice (on the frame of the strike)
    if (frames[currentFrame - 3] === 'X' && frames[currentFrame - 2] === 'X' &&
        frameRoll === 1  && currentFrame <= (maxFrames + 2)) {
      frameScores[currentFrame - 3] += pins;
    }
    if (frames[currentFrame - 2] === 'X' && currentFrame <= (maxFrames + 1)) {
      frameScores[currentFrame - 2] += pins;
    }
  }

  function isGameOver() {
    if (currentFrame <= maxFrames) return false;

    if (frames[maxFrames - 1] !== 'X' && frames[maxFrames - 1] !== 'S') return true;

    // spare in the last frame gets no more than bonus roll
    if (frames[maxFrames - 1] === 'S' && frameRoll > 1) return true;

    // bonus roll after the spare in the last frame may get a strike but then the games ends without another roll
    if (frames[maxFrames - 1] === 'S' && frames[maxFrames] === 'X') return true;

    if (frames[maxFrames - 1] === 'X') {
      // if the first bonus roll is not a strike then finish the bonus frame
      if (frames[maxFrames] !== 'X' && currentFrame > maxFrames + 1) return true;

      if (frames[maxFrames] === 'X') {
        // if the second bonus roll is a strike, but was still used, the game is over
        if (frames[maxFrames + 1] !== 'X' && frameRoll > 1) return true;
        // if the second bonus roll is a strike the game is over
        if (frames[maxFrames + 1] === 'X') return true;
      }
    }
    return false;
  }

  this.roll = function (pins) {
    if (pins < 0) {
      throw new Error( 'Negative roll is invalid');
    }

    if (pins > remainingPins) {
      throw new Error('Pin count exceeds pins on the lane');
    }

    if (isGameOver()) {
      throw new Error('Cannot roll after game is over');
    }

    incrementScore(pins);

    if (frameRoll === 1) {
      if (pins === maxPins) {
        scoreStrike();
        initializeFrame();
      } else {
        scoreFirstRoll(pins);
      }
    } else {
      if (pins === remainingPins) {
        scoreSpare(pins);
      } else {
        scoreOpenFrame(pins);
      }
      initializeFrame();
    }
  };

  this.score = function () {
    if (!isGameOver()) {
      throw new Error('Score cannot be taken until the end of the game');
    }
    return frameScores.reduce(function (total, num) {return total + num;});
  };
}

module.exports = Bowling;
