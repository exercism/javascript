let isSilence = (message) => message.replace(/\s+/g, '') === '';
let isShouting = (message) => message.toUpperCase() === message && /[A-Z]/.test(message);
let isAQuestion = (message) => message[message.length - 1] === '?';

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
