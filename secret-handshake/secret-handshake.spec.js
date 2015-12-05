import SecretHandshake from './secret-handshake';

describe('Secret Handshake', () => {
  it('1 is a wink', () => {
    const handshake = new SecretHandshake(1);
    expect(handshake.commands()).toEqual(['wink']);
  });

  xit('10 is a double blink', () => {
    const handshake = new SecretHandshake(2);
    expect(handshake.commands()).toEqual(['double blink']);
  });

  xit('100 is close your eyes', () => {
    const handshake = new SecretHandshake(4);
    expect(handshake.commands()).toEqual(['close your eyes']);
  });

  xit('1000 is jump', () => {
    const handshake = new SecretHandshake(8);
    expect(handshake.commands()).toEqual(['jump']);
  });

  xit('11 is wink and double blink', () => {
    const handshake = new SecretHandshake(3);
    expect(handshake.commands()).toEqual(['wink','double blink']);
  });

  xit('10011 is double blink and wink', () => {
    const handshake = new SecretHandshake(19);
    expect(handshake.commands()).toEqual(['double blink','wink']);
  });

  xit('11111 is jump, close your eyes, double blink, and wink', () => {
    const handshake = new SecretHandshake(31);
    expect(handshake.commands()).toEqual(['jump','close your eyes','double blink','wink']);
  });

  xit('text is an invalid secret handshake', () => {
    expect( function () {
      const handshake = new SecretHandshake('piggies');
    }).toThrow(new Error('Handshake must be a number'));
  });
});
