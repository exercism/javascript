const isSilence = message => message.replace(/\s+/g, '') === '';
const isShouting = message => message.toUpperCase() === message && /[A-Z]/.test(message);
const isAQuestion = message => message[message.length - 1] === '?';

class Bob {
  hey(message) {
    if (isSilence(message)) {
      return 'Fine. Be that way!';
    } else if (isShouting(message)) {
      return 'Whoa, chill out!';
    } else if (isAQuestion(message)) {
      return 'Sure.';
    }
    return 'Whatever.';
  }
}

export default Bob;
