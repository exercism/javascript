const lastArgIsOptions = (args) => {
  const last = args[args.length - 1];
  return typeof last === 'object';
};

const conclusion = (firstArg, qualifier = '') =>
  `And all for the want of a ${qualifier}${firstArg}.`;

export const proverb = (...args) => {
  let options = {};
  if (lastArgIsOptions(args)) {
    options = args.pop();
  }

  if (args.length === 0) {
    return '';
  }

  const allExceptLastArg = args.slice(0, -1);
  const chainOfEvents = allExceptLastArg.map(
    (arg, index) => `For want of a ${arg} the ${args[index + 1]} was lost.`
  );

  const qualifier = options.qualifier
    ? `${options.qualifier} `
    : options.qualifier;
  chainOfEvents.push(conclusion(args[0], qualifier));

  return chainOfEvents.join('\n');
};
