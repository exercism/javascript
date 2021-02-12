function bottles(number) {
  if (number === 0) {
    return 'No more bottles';
  }

  if (number === 1) {
    return '1 bottle';
  }

  return `${number} bottles`;
}

function action(currentVerse) {
  if (currentVerse === 0) {
    return 'Go to the store and buy some more, ';
  }

  const sbj = currentVerse === 1 ? 'it' : 'one';
  return `Take ${sbj} down and pass it around, `;
}

function nextVerse(currentVerse) {
  return currentVerse === 0 ? 99 : currentVerse - 1;
}

function nextBottle(currentVerse) {
  return `${bottles(
    nextVerse(currentVerse)
  ).toLowerCase()} of beer on the wall.`;
}

function verse(number) {
  const line1 = `${bottles(number)} of beer on the wall, ${bottles(
    number
  ).toLowerCase()} of beer.`;
  const line2 = action(number) + nextBottle(number);

  return [line1, line2];
}

export const recite = (startBottles, takeDown) => {
  let verses = [];
  for (let i = startBottles; i > startBottles - takeDown; i--) {
    if (verses.length > 0) {
      verses.push('');
    }
    verses = verses.concat(verse(i));
  }

  return verses;
};
