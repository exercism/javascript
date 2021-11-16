// @ts-check

export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

export function buildBirthdaySign(age) {
  // prettier-ignore
  return `Happy Birthday! What a ${age >= 50 ? 'mature' : 'young'} fellow you are.`;
}

export function graduationFor(name, year) {
  return `Congratulations ${name}!
Class of ${year}`;
}

export function costOf(sign, currency = 'dollars') {
  return `Your sign costs ${(sign.length * 2 + 20).toFixed(2)} ${currency}.`;
}
