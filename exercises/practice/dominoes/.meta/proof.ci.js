// Finding Eulerian Path
export const chain = (dominoes) => {
  if (dominoes.length === 0) return [];
  let remainings = dominoes;

  let solution = [dominoes[0][0]];

  // find the first loop
  const f = () => {
    const maybeNextDomino = remainings.find(matchOneEnd(last(solution)));
    if (!maybeNextDomino) return false;
    remainings = removeOneDomino(maybeNextDomino, remainings);
    solution.push(otherEnd(last(solution), maybeNextDomino));
    if (last(solution) === solution[0]) return true;
    if (remainings.length === 0) return false;
    return f();
  };
  if (!f()) return null;

  // back track solution and join new loops
  let target = solution.length;

  const g = () => {
    if (target < 0) return remainings.length === 0;

    // no more edge on this vertex?
    while (remainings.find(matchOneEnd(solution[target]))) {
      // find the loop
      const firstHalf = solution.slice(0, target);
      const secondHalf = solution.slice(target + 1);

      solution = [solution[target]];
      if (!f()) return false;
      solution = [...firstHalf, ...solution, ...secondHalf];
    }

    target -= 1;
    return g();
  };

  if (!g()) return null;

  return solution
    .slice(0, solution.length - 1)
    .map((v, i) => [solution[i], solution[i + 1]]);
};

const removeOneDomino = (domino, dominoes) => {
  const k = dominoes.findIndex(matchDomino(domino));
  return [...dominoes.slice(0, k), ...dominoes.slice(k + 1)];
};
const otherEnd = (x, [a, b]) => (a === x ? b : a);
const matchDomino =
  ([a, b]) =>
  ([c, d]) =>
    (a === c && b === d) || (a === d && b === c);
const matchOneEnd = (x) => (d2) => d2.includes(x);
const last = (xs) => xs[xs.length - 1];
