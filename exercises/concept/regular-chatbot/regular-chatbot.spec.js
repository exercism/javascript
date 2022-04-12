import {
  isValidCommand,
  removeEmoji,
  checkPhoneNumber,
  getURL,
  niceToMeetYou,
} from './regular-chatbot.js';

describe('isValidCommand', () => {
  test('recognizes wheter the command is at the first position', () => {
    expect(isValidCommand("Chatbot, play a song from the 80's.")).toBe(true);
    expect(isValidCommand('Hey Chatbot, where is the closest pharmacy?')).toBe(
      false
    );
  });

  test('does not care about UPPERCASE or lowercase', () => {
    expect(
      isValidCommand('CHATBOT, do you have a solution for this challenge?')
    ).toBe(true);
    expect(
      isValidCommand('chatbot, please tell me what is happening here.')
    ).toBe(true);
  });
});

describe('removeEmoji', () => {
  test('removes properly one single emoji encryption', () => {
    const expected = "I love playing videogames  it's one of my hobbies";
    expect(
      removeEmoji("I love playing videogames emoji3465 it's one of my hobbies")
    ).toBe(expected);
  });

  test('removes all the emoji encryption', () => {
    const expected = ' How about ordering  ?';
    expect(removeEmoji('emoji5321 How about ordering emoji8921 ?')).toBe(
      expected
    );
  });
});

describe('checkPhoneNumber', () => {
  test('recognizes a phone number with the correct format', () => {
    const expected = 'Thanks! You can download me now on your Phone.';
    expect(checkPhoneNumber('(+34) 659-771-594')).toBe(expected);
    expect(checkPhoneNumber('(+49) 543-928-190')).toBe(expected);
  });

  test('informs the user that it is a wrong phone number format', () => {
    expect(checkPhoneNumber('659-771-594')).toBe(
      "Oops, it seems like I can't reach out to 659-771-594"
    );
    expect(checkPhoneNumber('4355-67-274')).toBe(
      "Oops, it seems like I can't reach out to 4355-67-274"
    );
  });
});

describe('getURL', () => {
  test('returns only the link of the website', () => {
    expect(getURL('I learned a lot from exercism.com')).toBe('exercism.com');
    expect(
      getURL('There is a cool website called theodinproject.com to learn from')
    ).toBe('theodinproject.com');
  });

  test('returns an array with the multiple websites links', () => {
    expect(getURL('That was from reddit.com and notion.so')).toBe([
      'reddit.com',
      'notion.so',
    ]);
  });
});

describe('niceToMeetYou', () => {
  test('Greets the user by its proper name', () => {
    expect(niceToMeetYou('smith, john')).toBe('Nice to meet you John Smith');
    expect(niceToMeetYou('stephan, sandro')).toBe(
      'Nice to meet you Sandro Stephan'
    );
  });
});
