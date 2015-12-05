export default function (handshake) {
  const HANDSHAKE_COMMANDS = [ 'wink', 'double blink', 'close your eyes', 'jump', 'REVERSE' ]

  if (typeof handshake !== 'number') {
    throw new Error('Handshake must be a number');
  }

  this.commands = () => this.shakeWith;

  this.calculateHandshake = (handshake) => {
    const shakeWith = [];

    for (let i = 0; i < HANDSHAKE_COMMANDS.length; i++) {
      const currentCommand = HANDSHAKE_COMMANDS[i];
      const handshakeHasCommand = (handshake & Math.pow(2,i));

      if (handshakeHasCommand) {
        if (currentCommand === 'REVERSE') {
          shakeWith.reverse();
        } else {
          shakeWith.push(HANDSHAKE_COMMANDS[i]);
        }
      }
    }

    return shakeWith;
  };

  this.shakeWith = this.calculateHandshake(handshake);

}
