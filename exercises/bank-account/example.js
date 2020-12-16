export class BankAccount {
  open() {
    if (this._open) {
      throw new ValueError();
    }
    this._open = true;
    this._balance = 0;
  }

  close() {
    this.verifyAccount();
    this._open = false;
  }

  verifyAccount() {
    if (!this.isOpen) {
      throw new ValueError();
    }
  }

  deposit(amount) {
    this.verifyAccount();
    this.verifyDeposit(amount);
    this._balance = this._balance + amount;
  }

  verifyDeposit(amount) {
    if (amount < 0) {
      throw new ValueError();
    }
  }

  withdraw(amount) {
    this.verifyAccount();
    this.verifyWithdraw(amount);
    this._balance = this._balance - amount;
  }

  verifyWithdraw(amount) {
    if (amount < 0 || amount > this._balance) {
      throw new ValueError();
    }
  }

  get balance() {
    this.verifyAccount();
    return this._balance;
  }

  get isOpen() {
    return this._open;
  }
}

export class ValueError extends Error {}
