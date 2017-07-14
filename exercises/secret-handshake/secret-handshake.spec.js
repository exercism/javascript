import SecretHandshake from './secret-handshake';

describe('Secret Handshake', () => {
  test('binary 1 (hexadecimal 0x01) is a wink', () => {
    const handshake = new SecretHandshake(0x01);
    expect(handshake.commands()).toEqual(['wink']);
  });

  xtest('binary 10 (hexadecimal 0x02) is a double blink', () => {
    const handshake = new SecretHandshake(0x02);
    expect(handshake.commands()).toEqual(['double blink']);
  });

  xtest('binary 100 (hexadecimal 0x04) is close your eyes', () => {
    const handshake = new SecretHandshake(0x04);
    expect(handshake.commands()).toEqual(['close your eyes']);
  });

  xtest('binary 1000 (hexadecimal 0x08) is jump', () => {
    const handshake = new SecretHandshake(0x08);
    expect(handshake.commands()).toEqual(['jump']);
  });

  xtest('binary 11 (hexadecimal 0x03) is wink and double blink', () => {
    const handshake = new SecretHandshake(0x03);
    expect(handshake.commands()).toEqual(['wink', 'double blink']);
  });

  xtest('binary 10011 (hexadecimal 0x13) is double blink and wink', () => {
    const handshake = new SecretHandshake(0x13);
    expect(handshake.commands()).toEqual(['double blink', 'wink']);
  });

  xtest('binary 11111 (hexadecimal 0x1F) is jump, close your eyes, double blink, and wink', () => {
    const handshake = new SecretHandshake(0x1F);
    expect(handshake.commands()).toEqual(['jump', 'close your eyes', 'double blink', 'wink']);
  });

  xtest('text is an invalid secret handshake', () => {
    expect(() => new SecretHandshake('piggies'))
      .toThrow(new Error('Handshake must be a number'));
  });
});

