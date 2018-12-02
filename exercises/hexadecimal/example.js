export default function (hex) {
  this.hex = hex;

  this.toDecimal = () => {
    const hexCharacters = [...this.hex];

    for (let i = 0; i < hexCharacters.length; i += 1) {
      if (/[^0-9a-fA-F]/.exec(hexCharacters[i])) { return 0; }
    }

    return parseInt(this.hex, 16);
  };
}
