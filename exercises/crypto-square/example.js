export class Crypto {
  constructor(input) {
    this.input = input;
  }

  normalizePlaintext() {
    return this.input.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  }

  size() {
    const realLength = Math.sqrt(this.normalizePlaintext().length);
    return Math.ceil(realLength);
  }

  plaintextSegments() {
    const plainText = this.normalizePlaintext();
    const chunkSize = this.size();

    const splitRegex = new RegExp(`.{1,${chunkSize}}`, 'g');
    return plainText.match(splitRegex);
  }

  ciphertext() {
    const textSegments = this.plaintextSegments();
    const columns = [];
    let i;
    let j;
    let currentSegment;
    let currentLetter;

    for (i = 0; i < this.size(); i += 1) {
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

    return columns.join('');
  }

  normalizeCiphertext() {
    const chunkSize = this.size();
    const splitRegex = new RegExp(`.{1,${chunkSize}}`, 'g');
    return this.ciphertext().match(splitRegex).join(' ');
  }
}
