export class List {
  items = [];

  constructor(...items) {
    this.items = items;
  }

  compare(other) {
    const sublist =
      this.items.length === 0 ||
      `,${other.items.join(',')},`.includes(`,${this.items.join(',')},`);
    const superlist =
      other.items.length === 0 ||
      `,${this.items.join(',')},`.includes(`,${other.items.join(',')},`);
    return ['UNEQUAL', 'SUPERLIST', 'SUBLIST', 'EQUAL'][
      Number(superlist) + (Number(sublist) << 1)
    ];
  }
}
