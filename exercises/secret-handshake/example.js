const handshakeCommands = ['wink', 'double blink', 'close your eyes', 'jump'];

export const commands = (handshake) => {
  if (typeof handshake !== 'number') {
    throw new Error('Handshake must be a number');
  }

  const shakeWith = handshakeCommands.filter(
    (_, i) => handshake & Math.pow(2, i)
  );

  if (handshake & Math.pow(2, 4)) shakeWith.reverse();

  return shakeWith;
};
