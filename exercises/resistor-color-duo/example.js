const COLORS = [
  'black', 'brown', 'red', 'orange', 'yellow', 'green',
  'blue', 'violet', 'grey', 'white',
];

const reducer = (acc, color, i) => acc + COLORS.indexOf(color) * (10 ** i);

export const value = colors => colors.reverse().reduce(reducer, 0);
