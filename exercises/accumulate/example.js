export default (list, accumulator) => {
  const out = [];
  let idx = -1;
  const end = Array.isArray(list) ? list.length : 0;

  while (++idx < end) {
    out.push(accumulator(list[idx]));
  }

  return out;
};

