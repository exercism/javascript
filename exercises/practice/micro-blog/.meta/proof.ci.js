export const truncate = (input) =>
  Array.from(new Intl.Segmenter().segment(String(input)), (x) => x.segment)
    .slice(0, 5)
    .join('');
