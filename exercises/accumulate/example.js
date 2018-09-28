export const accumulate = (list, accumulator) => {
  const out = [];
  let idx = 0;
  const end = Array.isArray(list) ? list.length : 0;

  while (idx < end) {
    out.push(accumulator(list[idx]));
    idx += 1;
  }

  return out;
};
