const wrapInTag = (tag, text) => `<${tag}>${text}</${tag}>`;

const REPLACERS = {
  paragraph: {
    operationNumber: 1,
    regexPattern: /^(.+)$/gim,
    replacer: (match, p1) =>
      match.startsWith('*') || match.startsWith('#')
        ? match
        : wrapInTag('p', p1),
  },
  heading: {
    operationNumber: 2,
    regexPattern: /^(#{1,7})\s*(.+)/gim,
    replacer: (match, p1, p2) =>
      p1.length > 6 ? wrapInTag('p', match) : wrapInTag(`h${p1.length}`, p2),
  },
  bold: {
    operationNumber: 3,
    regexPattern: /__(.+)__/gim,
    replacer: (match, p1) => wrapInTag('strong', p1),
  },
  italic: {
    operationNumber: 4,
    regexPattern: /_(.+)_/gim,
    replacer: (match, p1) => wrapInTag('em', p1),
  },
  listItem: {
    operationNumber: 5,
    regexPattern: /^\*\s(.+)/gim,
    replacer: (match, p1) => wrapInTag('li', p1),
  },
  newLine: {
    operationNumber: 6,
    regexPattern: /\n/gim,
    replacer: () => '',
  },
  list: {
    operationNumber: 7,
    regexPattern: /(<li>.+<\/li>)/gim,
    replacer: (match, p1) => wrapInTag('ul', p1),
  },
};

const sortedOperations = Object.values(REPLACERS).sort(
  (a, b) => a.operationNumber - b.operationNumber,
);

export function parse(markdown) {
  return sortedOperations.reduce(
    (text, { regexPattern, replacer }) =>
      text.replaceAll(new RegExp(regexPattern), replacer),
    markdown,
  );
}
