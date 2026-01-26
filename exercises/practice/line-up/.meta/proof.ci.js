const getSuffix = (number) => {
  const lastTwoDigits = number % 100;
  const lastDigit = number % 10;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return 'th';
  }

  if (lastDigit === 1) {
    return 'st';
  }

  if (lastDigit === 2) {
    return 'nd';
  }

  if (lastDigit === 3) {
    return 'rd';
  }

  return 'th';
};

export const format = (name, number) =>
  `${name}, you are the ${number}${getSuffix(number)} customer we serve today. Thank you!`;
