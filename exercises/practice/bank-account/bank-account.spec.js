import { BankAccount, ValueError } from './bank-account';

describe('Bank Account', () => {
  test('newly opened account has zero balance', () => {
    const account = new BankAccount();
    account.open();
    expect(account.balance).toEqual(0);
  });

  xtest('can deposit money', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    expect(account.balance).toEqual(100);
  });

  xtest('can deposit money sequentially', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    account.deposit(50);
    expect(account.balance).toEqual(150);
  });

  xtest('can withdraw money', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    account.withdraw(50);
    expect(account.balance).toEqual(50);
  });

  xtest('can withdraw money sequentially', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    account.withdraw(20);
    account.withdraw(80);
    expect(account.balance).toEqual(0);
  });

  xtest('checking balance of closed account throws error', () => {
    const account = new BankAccount();
    account.open();
    account.close();
    expect(() => account.balance).toThrow(ValueError);
  });

  xtest('deposit into closed account throws error', () => {
    const account = new BankAccount();
    account.open();
    account.close();
    expect(() => {
      account.deposit(50);
    }).toThrow(ValueError);
  });

  xtest('withdraw from closed account throws error', () => {
    const account = new BankAccount();
    account.open();
    account.close();
    expect(() => {
      account.withdraw(50);
    }).toThrow(ValueError);
  });

  xtest('close already closed account throws error', () => {
    const account = new BankAccount();
    expect(() => {
      account.close();
    }).toThrow(ValueError);
  });

  xtest('open already opened account throws error', () => {
    const account = new BankAccount();
    account.open();
    expect(() => {
      account.open();
    }).toThrow(ValueError);
  });

  xtest('reopened account does not retain balance', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(50);
    account.close();
    account.open();
    expect(account.balance).toEqual(0);
  });

  xtest('cannot withdraw more than deposited', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(25);
    expect(() => {
      account.withdraw(50);
    }).toThrow(ValueError);
  });

  xtest('cannot withdraw negative amount', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    expect(() => {
      account.withdraw(-50);
    }).toThrow(ValueError);
  });

  xtest('cannot deposit negative amount', () => {
    const account = new BankAccount();
    account.open();
    expect(() => {
      account.deposit(-50);
    }).toThrow(ValueError);
  });

  xtest('changing balance directly throws error', () => {
    const account = new BankAccount();
    account.open();
    expect(() => {
      account.balance = 100;
    }).toThrow(Error);
  });
});
