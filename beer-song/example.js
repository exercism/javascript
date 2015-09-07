function bottles(number) {
  if (number === 0) {
    return 'No more bottles';
  }

  if (number === 1) {
    return '1 bottle';
  }

  return number + ' bottles';
}

function action(currentVerse) {
  if (currentVerse === 0) {
    return 'Go to the store and buy some more, ';
  }

  let sbj = (currentVerse === 1 ? 'it' : 'one');
  return 'Take ' + sbj + ' down and pass it around, ';
}

function nextBottle(currentVerse) {
  return bottles(nextVerse(currentVerse)).toLowerCase() + ' of beer on the wall.\n';
}

function nextVerse(currentVerse) {
  return currentVerse === 0 ? 99 : (currentVerse - 1);
}

class BeerSong {
  static verse(number) {
    let line1 = bottles(number) + ' of beer on the wall, ';
    let line2 = bottles(number).toLowerCase() + ' of beer.\n';
    let line3 = action(number);
    let line4 = nextBottle(number);

    return [line1, line2, line3, line4].join('');
  }

  static sing(first = 99, last = 0) {
    let verses = [];
    for (let i = first; i >= last; i--) {
      verses.push(this.verse(i));
    }

    return verses.join('\n');
  }
}

export default BeerSong;
