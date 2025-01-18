export class Palindromes {
  static generate({ minFactor, maxFactor }) {
    if (minFactor > maxFactor) throw new Error('min must be <= max');
    let isPalindrome = (n) =>
      [...n.toString()].reverse().join('') === n.toString();
    let search = (n, pred, fn) => {
      while (pred(n)) {
        if (!isPalindrome(n)) {
          n = fn(n);
          continue;
        }
        let factors = [];
        for (let p = minFactor; p <= n / p; p++) {
          if (n % p === 0) {
            let q = n / p;
            if (q <= maxFactor) factors.push([p, q]);
          }
        }
        if (factors.length > 0) return { value: n, factors };
        n = fn(n);
      }
      return { value: null, factors: [] };
    };
    let [lower, upper] = [minFactor * minFactor, maxFactor * maxFactor];
    return {
      largest: search(
        upper,
        (n) => n >= lower,
        (x) => x - 1,
      ),
      smallest: search(
        lower,
        (n) => n <= upper,
        (x) => x + 1,
      ),
    };
  }
}
