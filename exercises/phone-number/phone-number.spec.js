import PhoneNumber from './phone-number';

describe('PhoneNumber()', () => {
  test('cleans the number', () => {
    const phone = new PhoneNumber('(123) 456-7890');
    expect(phone.number()).toEqual('1234567890');
  });

  xtest('cleans numbers with dots', () => {
    const phone = new PhoneNumber('123.456.7890');
    expect(phone.number()).toEqual('1234567890');
  });

  xtest('cleans numbers with multiple spaces', () => {
    const phone = new PhoneNumber('123 456   7890   ');
    expect(phone.number()).toEqual('1234567890');
  });

  xtest('invalid when 9 digits', () => {
    const phone = new PhoneNumber('123456789');
    expect(phone.number()).toEqual(null);
  });

  xtest('invalid when 11 digits', () => {
    const phone = new PhoneNumber('21234567890');
    expect(phone.number()).toEqual(null);
  });

  xtest('valid when 11 digits and starting with 1', () => {
    const phone = new PhoneNumber('11234567890');
    expect(phone.number()).toEqual('1234567890');
  });

  xtest('invalid when 12 digits', () => {
    const phone = new PhoneNumber('321234567890');
    expect(phone.number()).toEqual(null);
  });

  xtest('invalid with letters', () => {
    const phone = new PhoneNumber('123-abc-7890');
    expect(phone.number()).toEqual(null);
  });

  xtest('invalid with punctuations', () => {
    const phone = new PhoneNumber('123-@:!-7890');
    expect(phone.number()).toEqual(null);
  });

  xtest('invalid with right number of digits but letters mixed in', () => {
    const phone = new PhoneNumber('1a2b3c4d5e6f7g8h9i0j');
    expect(phone.number()).toEqual(null);
  });
});
