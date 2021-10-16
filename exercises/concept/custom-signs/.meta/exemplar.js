// @ts-check

export const BIRTHDAY = 'Birthday';
export const ANNIVERSARY = 'Anniversary';
export const EXCLAMATION = '!';

export function buildSign(occasion, name) {
  return `Happy ${
    occasion === BIRTHDAY ? BIRTHDAY : ANNIVERSARY
  } ${name}${EXCLAMATION}`;
}

export function graduationFor(name, year) {
  return `Congratulations ${name}
  Class of ${year}`;
}

export function costOf(sign, currency = 'dollars') {
  const convertedSign = Number.parseFloat(sign.length);
  return `Your sign cost ${(convertedSign * 2 + 20).toFixed(2)} ${currency}`;
}
