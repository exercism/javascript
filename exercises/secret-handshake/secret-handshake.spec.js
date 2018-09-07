import { secretHandshake } from './secret-handshake';

describe('Secret Handshake', () => {
  test('binary 1 (hexadecimal 0x01) is a wink', () => {
    expect(secretHandshake(0x01)).toEqual(['wink']);
  });

  xtest('binary 10 (hexadecimal 0x02) is a double blink', () => {
    expect(secretHandshake(0x02)).toEqual(['double blink']);
  });

  xtest('binary 100 (hexadecimal 0x04) is close your eyes', () => {
    expect(secretHandshake(0x04)).toEqual(['close your eyes']);
  });

  xtest('binary 1000 (hexadecimal 0x08) is jump', () => {
    expect(secretHandshake(0x08)).toEqual(['jump']);
  });

  xtest('binary 11 (hexadecimal 0x03) is wink and double blink', () => {
    expect(secretHandshake(0x03)).toEqual(['wink', 'double blink']);
  });

  xtest('binary 10011 (hexadecimal 0x13) is double blink and wink', () => {
    expect(secretHandshake(0x13)).toEqual(['double blink', 'wink']);
  });

  xtest('binary 11111 (hexadecimal 0x1F) is jump, close your eyes, double blink, and wink', () => {
    expect(secretHandshake(0x1F)).toEqual(['jump', 'close your eyes', 'double blink', 'wink']);
  });

  xtest('text is an invalid secret handshake', () => {
    expect(() => secretHandshake('piggies'))
      .toThrow(new Error('Handshake must be a number'));
  });
});
