export const format = (name, ordinal) => {
  const suffix = getSuffix(ordinal);

  return `${name}, you are the ${ordinal}${suffix} customer we serve today. Thank you!`;
};

const getSuffix = (number) => {
  const lastTwoDigits = number % 100;
  const lastOneDigit = number % 10;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return 'th';
  }

  if (lastOneDigit === 1) {
    return 'st';
  }

  if (lastOneDigit === 2) {
    return 'nd';
  }

  if (lastOneDigit === 3) {
    return 'rd';
  }

  return 'th';
};
