const BOOK_PRICE = 800;
const DISCOUNTS = [1, 0.95, 0.9, 0.8, 0.75];

const groupCost = (size) => size * BOOK_PRICE * DISCOUNTS[size - 1];

const groupBooks = (books) => {
  const counter = {};
  books.forEach((book) => {
    if (!counter[book.toString()]) {
      counter[book.toString()] = 1;
    } else {
      counter[book.toString()]++;
    }
  });
  return counter;
};

const removeMostFrequent = (volumes, size) => {
  const res = {};
  for (let key in volumes) {
    res[key] = volumes[key];
  }
  Object.entries(volumes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, size)
    .forEach((k) => {
      res[k[0]] = volumes[k[0]] - 1;
      if (res[k[0]] <= 0) delete res[k[0]];
    });
  return res;
};

const collectionFromGroup = (volumes) => {
  const subGroup = [];
  Object.entries(volumes).forEach((entry) => {
    if (entry[1] > 0) {
      const sub = new Array(entry[1]);
      subGroup.push(...sub.fill(parseInt(entry[0])));
    }
  });
  return subGroup;
};

const calculate = (sortedBooks) => {
  if (sortedBooks.length === 0) return 0;
  const volumes = groupBooks(sortedBooks);
  let price = sortedBooks.length * BOOK_PRICE;
  for (let size = Object.keys(volumes).length; size > 1; size--) {
    const subGroup = removeMostFrequent(volumes, size);
    const collection = collectionFromGroup(subGroup);
    price = Math.min(price, groupCost(size) + calculate(collection));
  }
  return price;
};

export const cost = (books) => {
  if (books.length === 0) {
    return 0;
  }

  return calculate(books.sort((a, b) => a - b));
};
