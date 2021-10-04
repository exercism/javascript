const reverseString = (str) => str.split('').reverse().join('');

class Palindrome {
  constructor(factor1, factor2) {
    this.value = factor1 * factor2;
    this.factors = [[factor1, factor2].sort()];
  }

  withFactors(factors) {
    this.factors.push(factors.sort());
    this.factors = this.factors.sort();
    return this;
  }

  valid() {
    const s = `${this.value}`;
    return s === reverseString(s);
  }

  merge(other) {
    other.factors.forEach((f) => {
      this.factors.push(f);
    });
    this.factors = this.factors.sort();
    return this;
  }
}

export class Palindromes {
  constructor(maxFactor, minFactor = 1) {
    this.maxFactor = maxFactor;
    this.minFactor = minFactor;
  }

  get largest() {
    let left = this.maxFactor,
      right = this.maxFactor,
      best = new Palindrome(this.minFactor, this.minFactor);

    while (right >= this.minFactor) {
      let p = new Palindrome(left, right);

      if (best.value && p.value < best.value) {
        right--;
        left = right;
        continue;
      }

      if (p.valid()) {
        if (best.value < p.value) {
          best = p;
        } else if (best.value === p.value) {
          best = p.merge(best);
        }
      }

      if (left - 1 < this.minFactor) {
        right--;
        left = right;
      } else {
        left--;
      }
    }

    if (best.valid()) {
      return best;
    }

    return { value: null, factors: [] };
  }

  get smallest() {
    for (let m = this.minFactor; m <= this.maxFactor; m += 1) {
      for (let n = this.minFactor; n <= this.maxFactor; n += 1) {
        const p = new Palindrome(m, n);
        if (p.valid()) {
          return p;
        }
      }
    }
    return { value: null, factors: [] };
  }

  static generate(params) {
    if ((params.minFactor || 1) > params.maxFactor) {
      throw new Error('min must be <= max');
    }
    return new Palindromes(params.maxFactor, params.minFactor || 1);
  }
}
