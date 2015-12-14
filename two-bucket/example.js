class TwoBucket {
  constructor(x, y, z, starter) {
    this.starter = starter;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  reachedGoal(measurements) {
    if(measurements[0] === this.z || measurements[1] === this.z) {
      if(measurements[0] === this.z) {
        this.goalBucket = 'one';
        this.otherBucket = measurements[1];
      } else {
        this.goalBucket = 'two';
        this.otherBucket = measurements[0];
      }

      return true;
    }

    return false;
  }

  bigFirst(measurements, moveCount, prBool) {
    let j = measurements[0], k = measurements[1];
    while(true) {
      if(this.reachedGoal(measurements)) break;
      if(k > this.x && j === 0 && moveCount === 0) {
        j = this.x;
        k = this.y - j;
      } else if(j == this.x) {
        j = 0;
      } else if((k > this.x && j !== 0) || (k > this.x && prBool)) {
        k = k - (this.x-j);
        j = this.x;
      } else if(k > this.x || j == 0) {
        j = k;
        k = k - j;
      } else if(k == 0) {
        k = this.y;
      }
      measurements = [j,k];
      moveCount++;
      prBool = !prBool;
    }

    return moveCount;
  }

  smallFirst(measurements, moveCount, prBool) {
    let j = measurements[0], k = measurements[1];
    while(true) {
      if(this.reachedGoal(measurements)) break;
      if(j === this.x && moveCount === 0) {
        j = 0;
        k = this.x;
      } else if(j == 0) {
        j = this.x;
      } else if(j == this.x && k < this.y) {
        var tempK = k;
        k + j > this.y ? k = this.y : k = tempK + j;
        tempK + j > this.y ? j = j - (this.y- tempK) : j = 0;
      } else if(k === this.y) {
        k = 0;
      } else if(k === 0 && j < this.x) {
        k = j;
        j = 0;
      }
      measurements = [j,k];
      moveCount++;
      prBool = !prBool;
    }

    return moveCount;
  }

  moves() {
    let j = 0, k = 0; //j will be running val of bucket one, k = running val of bucket two
    this.starter === 'one' ? j = this.x : k = this.y;
    let measurements = [ j, k ];
    let moveCount = 0;
    let prBool = true; // pour / receive boolean - need to pour or receive every other turn

    if(this.starter === 'one') {
      moveCount = this.smallFirst(measurements, moveCount, prBool);
    } else {
      moveCount = this.bigFirst(measurements, moveCount, prBool);
    }

    return moveCount + 1; //accounts for first move made before loop (and moveCount starts at zero before loop)
  }

}

export default TwoBucket;

