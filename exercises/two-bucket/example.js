export class TwoBucket {
  constructor(x, y, z, starter) {
    this.starter = starter;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  reachedGoal(measurements) {
    const j = measurements[0];
    const k = measurements[1];

    if (j === this.z || k === this.z) {
      if (j === this.z) {
        this.goalBucket = 'one';
        this.otherBucket = k;
      } else {
        this.goalBucket = 'two';
        this.otherBucket = j;
      }

      return true;
    }

    return false;
  }

  bigFirst(measurements, moveCount, prBool) {
    let measure = measurements;
    let mvCount = moveCount;
    let j = measure[0];
    let k = measure[1];
    let bool = prBool;

    while (!this.reachedGoal(measure)) {
      if (k > this.x && j === 0 && mvCount === 0) {
        j = this.x;
        k = this.y - j;
      } else if (j === this.x) {
        j = 0;
      } else if (k > this.x && (j !== 0 || k > this.x) && bool) {
        k -= (this.x - j);
        j = this.x;
      } else if (k > this.x || j === 0) {
        j = k;
        k -= j;
      } else if (k === 0) {
        k = this.y;
      }
      measure = [j, k];
      mvCount += 1;
      bool = !bool;
    }

    return mvCount;
  }

  smallFirst(measurements, moveCount, prBool) {
    let measure = measurements;
    let mvCount = moveCount;
    let j = measure[0];
    let k = measure[1];
    let bool = prBool;

    while (!this.reachedGoal(measure)) {
      if (j === this.x && mvCount === 0) {
        j = 0;
        k = this.x;
      } else if (j === 0) {
        j = this.x;
      } else if (j === this.x && k < this.y) {
        const tempK = k;
        if (k + j > this.y) {
          k = this.y;
        } else {
          k = tempK + j;
        }

        if (tempK + j > this.y) {
          j -= this.y - tempK;
        } else {
          j = 0;
        }
      } else if (k === this.y) {
        k = 0;
      } else if (k === 0 && j < this.x) {
        k = j;
        j = 0;
      }
      measure = [j, k];
      mvCount += 1;
      bool = !bool;
    }

    return mvCount;
  }

  moves() {
    let j = 0;
    // j will be running val of bucket one, k = running val of bucket two
    let k = 0;

    if (this.starter === 'one') {
      j = this.x;
    } else {
      k = this.y;
    }

    const measurements = [j, k];
    let moveCount = 0;
    // pour / receive boolean - need to pour or receive every other turn
    const prBool = true;

    if (this.starter === 'one') {
      moveCount = this.smallFirst(measurements, moveCount, prBool);
    } else {
      moveCount = this.bigFirst(measurements, moveCount, prBool);
    }

    // accounts for first move made before loop (and moveCount starts at zero before loop)
    return moveCount + 1;
  }
}
