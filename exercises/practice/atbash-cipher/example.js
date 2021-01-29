const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

export const encode = (message) => {
  const encodedMessage = [...message.toLowerCase().replace(/[ .,]/g, '')]
    .map((char) => {
      if (ALPHABET.includes(char)) {
        return ALPHABET[ALPHABET.length - 1 - ALPHABET.indexOf(char)];
      }
      return char;
    })
    .join('');
  return encodedMessage.match(/.{1,5}/g).join(' ');
};

export const decode = (message) => {
  return encode(message).replace(/ /g, '');
};
