import { commands } from './secret-handshake';

describe('Secret Handshake', () => {
  describe('Create A Handshake For A Number', () => {
    test('wink for 1', () => {
      expect(commands(1)).toEqual(['wink']);
    });

    xtest('double blink for 10', () => {
      expect(commands(2)).toEqual(['double blink']);
    });

    xtest('close your eyes for 100', () => {
      expect(commands(4)).toEqual(['close your eyes']);
    });

    xtest('jump for 1000', () => {
      expect(commands(8)).toEqual(['jump']);
    });

    xtest('combine two actions', () => {
      expect(commands(3)).toEqual(['wink', 'double blink']);
    });

    xtest('reverse two actions', () => {
      expect(commands(19)).toEqual(['double blink', 'wink']);
    });

    xtest('reversing one action gives the same action', () => {
      expect(commands(24)).toEqual(['jump']);
    });

    xtest('reversing no actions still gives no actions', () => {
      expect(commands(16)).toEqual([]);
    });

    xtest('all possible actions', () => {
      expect(commands(15)).toEqual([
        'wink',
        'double blink',
        'close your eyes',
        'jump',
      ]);
    });

    xtest('reverse all possible actions', () => {
      expect(commands(31)).toEqual([
        'jump',
        'close your eyes',
        'double blink',
        'wink',
      ]);
    });

    xtest('do nothing for zero', () => {
      expect(commands(0)).toEqual([]);
    });
  });
});
