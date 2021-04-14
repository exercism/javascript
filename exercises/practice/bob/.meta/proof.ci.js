const isSilence = (message) => message.replace(/\s+/g, '') === '';
const isShouting = (message) =>
  message.toUpperCase() === message && /[A-Z]/.test(message);
const isAQuestion = (message) => message.endsWith('?');

export const hey = (message) => {
  if (isSilence(message)) {
    return 'Fine. Be that way!';
  }
  if (isShouting(message)) {
    if (isAQuestion(message)) {
      return "Calm down, I know what I'm doing!";
    }
    return 'Whoa, chill out!';
  }
  if (isAQuestion(message.trim())) {
    return 'Sure.';
  }
  return 'Whatever.';
};
