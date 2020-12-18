export class Crypto {
  constructor(input) {
    this.input = input;
  }

  get plaintext() {
    return this.input.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  }

  get ciphertext() {
    const chunkSize = this.size;
    if (chunkSize === 0) {
      return '';
    }

    const splitRegex = new RegExp(`.{1,${chunkSize}}`, 'g');
    return this.ciphertextSegments()
      .join('')
      .match(splitRegex)
      .map((item) => item.padEnd(chunkSize, ' '))
      .join(' ');
  }

  get size() {
    const realLength = Math.sqrt(this.plaintext.length);
    return Math.ceil(realLength);
  }

  ciphertextSegments() {
    const textSegments = this.plaintextSegments();
    const columns = [];
    let i;
    let j;
    let currentSegment;
    let currentLetter;

    for (i = 0; i < this.size; i += 1) {
      columns.push([]);
    }

    for (i = 0; i < textSegments.length; i += 1) {
      currentSegment = textSegments[i];

      for (j = 0; j < currentSegment.length; j += 1) {
        currentLetter = currentSegment[j];
        columns[j].push(currentLetter);
      }
    }

    for (i = 0; i < columns.length; i += 1) {
      columns[i] = columns[i].join('');
    }

    return columns;
  }

  plaintextSegments() {
    const plainText = this.plaintext;
    const chunkSize = this.size;

    const splitRegex = new RegExp(`.{1,${chunkSize}}`, 'g');
    return plainText.match(splitRegex);
  }
}
