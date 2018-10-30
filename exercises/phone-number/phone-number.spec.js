import PhoneNumber from './phone-number';

describe('PhoneNumber()', () => {
  test('cleans the number', () => {
    const phone = new PhoneNumber('(223) 456-7890');
    expect(phone.number()).toEqual('2234567890');
  });

  xtest('cleans numbers with dots', () => {
    const phone = new PhoneNumber('223.456.7890');
    expect(phone.number()).toEqual('2234567890');
  });

  xtest('cleans numbers with multiple spaces', () => {
    const phone = new PhoneNumber('223 456   7890   ');
    expect(phone.number()).toEqual('2234567890');
  });

  xtest('invalid when 9 digits', () => {
    const phone = new PhoneNumber('223456789');
    expect(phone.number()).toEqual(null);
  });

  xtest('invalid when 11 digits does not start with a 1', () => {
    const phone = new PhoneNumber('22234567890');
    expect(phone.number()).toEqual(null);
  });

  xtest('valid when 11 digits and starting with 1', () => {
    const phone = new PhoneNumber('12234567890');
    expect(phone.number()).toEqual('2234567890');
  });

  xtest('valid when 11 digits and starting with 1 even with punctuation', () => {
    const phone = new PhoneNumber('+1 (223) 456-7890');
    expect(phone.number()).toEqual('2234567890');
  });

  xtest('invalid when 12 digits', () => {
    const phone = new PhoneNumber('322234567890');
    expect(phone.number()).toEqual(null);
  });

  xtest('invalid with letters', () => {
    const phone = new PhoneNumber('223-abc-7890');
    expect(phone.number()).toEqual(null);
  });

  xtest('invalid with punctuations', () => {
    const phone = new PhoneNumber('223-@:!-7890');
    expect(phone.number()).toEqual(null);
  });

  xtest('invalid if area code starts with 0 or 1', () => {
    const phone1 = new PhoneNumber('(023) 456-7890');
    const phone2 = new PhoneNumber('(123) 456-7890');
    expect(phone1.number()).toEqual(null);
    expect(phone2.number()).toEqual(null);
  });

  xtest('invalid if exchange code starts with 0 or 1', () => {
    const phone1 = new PhoneNumber('(223) 056-7890');
    const phone2 = new PhoneNumber('(223) 156-7890');
    expect(phone1.number()).toEqual(null);
    expect(phone2.number()).toEqual(null);
  });

  xtest('invalid when 11 digits starting with 1, '
  + 'but invalid area/exchange code first digits', () => {
    const phone1 = new PhoneNumber('1 (023) 456-7890');
    const phone2 = new PhoneNumber('1 (123) 456-7890');
    const phone3 = new PhoneNumber('1 (223) 056-7890');
    const phone4 = new PhoneNumber('1 (223) 156-7890');
    expect(phone1.number()).toEqual(null);
    expect(phone2.number()).toEqual(null);
    expect(phone3.number()).toEqual(null);
    expect(phone4.number()).toEqual(null);
  });
});
