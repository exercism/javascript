import PhoneNumber from './phone-number';

describe('PhoneNumber()', () => {

  it('cleans the number (123) 456-7890', () => {
    var phone = new PhoneNumber('(123) 456-7890');
    expect(phone.number()).toEqual('1234567890');
  });

  xit('cleans numbers with dots', () => {
    var phone = new PhoneNumber('123.456.7890');
    expect(phone.number()).toEqual('1234567890');
  });

  xit('valid when 11 digits and first digit is 1', () => {
    var phone = new PhoneNumber('11234567890');
    expect(phone.number()).toEqual('1234567890');
  });

  xit('invalid when 11 digits', () => {
    var phone = new PhoneNumber('21234567890');
    expect(phone.number()).toEqual('0000000000');
  });

  xit('invalid when 9 digits', () => {
    var phone = new PhoneNumber('123456789');
    expect(phone.number()).toEqual('0000000000');
  });

  xit('has an area code', () => {
    var phone = new PhoneNumber('1234567890');
    expect(phone.areaCode()).toEqual('123');
  });

  xit('formats a number', () => {
    var phone = new PhoneNumber('1234567890');
    expect(phone.toString()).toEqual('(123) 456-7890');
  });

});
