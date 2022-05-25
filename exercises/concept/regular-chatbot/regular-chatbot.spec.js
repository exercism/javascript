import {
  isValidCommand,
  removeEmoji,
  checkPhoneNumber,
  getURL,
  niceToMeetYou,
} from './regular-chatbot';

describe('isValidCommand', () => {
  test('recognizes wheter the command is at the first position', () => {
    expect(isValidCommand('Chatbot, Do you understand this command?')).toBe(
      true
    );
    expect(
      isValidCommand(
        'Hey Chatbot, please tell me what is the weather for tomorrow.'
      )
    ).toBe(false);
  });

  test('does not care about UPPERCASE or lowercase', () => {
    expect(isValidCommand('CHATBOT, Is it okey if I shout at you?')).toBe(true);
    expect(
      isValidCommand('chatbot, please tell me what is happening here.')
    ).toBe(true);
  });
});

describe('removeEmoji', () => {
  test('removes properly one single emoji encryption', () => {
    const expected = 'What was your name?  Sorry I forgot about it.';
    expect(
      removeEmoji('What was your name? emoji2134 Sorry I forgot about it.')
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
    const expected = 'Thanks! You can now download me to your phone.';
    expect(checkPhoneNumber('(+34) 643-876-459')).toBe(expected);
    expect(checkPhoneNumber('(+49) 543-928-190')).toBe(expected);
  });

  test('informs the user that it is a wrong phone number format', () => {
    expect(checkPhoneNumber('322-787-654')).toBe(
      "Oops, it seems like I can't reach out to 322-787-654"
    );
    expect(checkPhoneNumber('4355-67-274')).toBe(
      "Oops, it seems like I can't reach out to 4355-67-274"
    );
  });
});

describe('getURL', () => {
  test('returns only the link of the website', () => {
    expect(getURL('You can check more info on youtube.com')).toStrictEqual([
      'youtube.com',
    ]);
    expect(
      getURL('There is a cool website called theodinproject.com to learn from')
    ).toStrictEqual(['theodinproject.com']);
  });

  test('returns an array with the multiple websites links', () => {
    expect(getURL('That was from reddit.com and notion.so')).toStrictEqual([
      'reddit.com',
      'notion.so',
    ]);
  });
});

describe('niceToMeetYou', () => {
  test('greets the user by its proper name', () => {
    expect(niceToMeetYou('Sanz, Pablo')).toBe('Nice to meet you, Pablo Sanz');
    expect(niceToMeetYou('Stephan, Sandro')).toBe(
      'Nice to meet you, Sandro Stephan'
    );
  });
});
