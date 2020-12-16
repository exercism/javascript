export const isValid = (isbn) => {
  isbn = isbn.replace(/-/g, '');

  const isbnFormat = /^[0-9]{9}(X|\d)$/g;
  if (!isbnFormat.test(isbn)) {
    return false;
  }

  const isbnLength = 10;
  const sumOfProducts = [...isbn]
    .map((digit) => (digit === 'X' ? 10 : Number(digit)))
    .map((digit, index) => digit * (isbnLength - index))
    .reduce((sum, value) => sum + value, 0);
  return sumOfProducts % 11 === 0;
};
