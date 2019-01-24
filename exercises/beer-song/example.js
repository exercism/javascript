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
  return `${bottles(nextVerse(currentVerse)).toLowerCase()} of beer on the wall.\n`;
}

export class BeerSong {
  static verse(number) {
    const line1 = `${bottles(number)} of beer on the wall, `;
    const line2 = `${bottles(number).toLowerCase()} of beer.\n`;
    const line3 = action(number);
    const line4 = nextBottle(number);

    return [line1, line2, line3, line4].join('');
  }

  static sing(first = 99, last = 0) {
    const verses = [];
    for (let i = first; i >= last; i -= 1) {
      verses.push(this.verse(i));
    }

    return verses.join('\n');
  }
}
