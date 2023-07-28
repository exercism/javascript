export class TwoBucket {
  constructor(size1, size2, goal, start) {
    this.goal = goal;
    this.buckets = [new Bucket('one', size1), new Bucket('two', size2)];

    if (start === 'two') {
      this.buckets.reverse();
    }

    this.validate();
  }

  get first() {
    return this.buckets[0];
  }
  get second() {
    return this.buckets[1];
  }

  validate() {
    if (this.goal > Math.max(this.first.size, this.second.size)) {
      throw new Error('Goal is bigger than the largest bucket.');
    }

    if (this.goal % gcd(this.first.size, this.second.size) !== 0) {
      throw new Error(
        'Goal must be a multiple of the GCD of the sizes of the two buckets.',
      );
    }
  }

  solve() {
    this.first.empty();
    this.second.empty();
    let moves = 0;

    // fill the start bucket with the first move
    this.first.fill();
    moves += 1;

    // optimization: if the other bucket is the right size,
    // fill it immediately with the second move
    if (this.second.size === this.goal) {
      this.second.fill();
      moves += 1;
    }

    /* eslint-disable-next-line no-constant-condition */
    while (true) {
      if (this.first.amount === this.goal) {
        return {
          moves: moves,
          goalBucket: this.first.name,
          otherBucket: this.second.amount,
        };
      }

      if (this.second.amount === this.goal) {
        return {
          moves: moves,
          goalBucket: this.second.name,
          otherBucket: this.first.amount,
        };
      }

      if (this.first.isEmpty) {
        this.first.fill();
      } else if (this.second.isFull) {
        this.second.empty();
      } else {
        this.first.pourInto(this.second);
      }

      moves += 1;
    }
  }
}

class Bucket {
  constructor(name, size) {
    this.name = name;
    this.size = size;
    this.amount = 0;
  }

  // accessors
  get available() {
    return this.size - this.amount;
  }
  get isFull() {
    return this.amount === this.size;
  }
  get isEmpty() {
    return this.amount === 0;
  }

  fill() {
    this.amount = this.size;
  }
  empty() {
    this.amount = 0;
  }

  pourInto(other) {
    const quantity = Math.min(this.amount, other.available);
    this.amount -= quantity;
    other.amount += quantity;
  }
}

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
