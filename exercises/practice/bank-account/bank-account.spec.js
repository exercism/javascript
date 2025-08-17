import { describe, expect, test, xtest } from '@jest/globals';
import { BankAccount, ValueError } from './bank-account';

describe('Bank Account', () => {
  test('newly opened account has zero balance', () => {
    const account = new BankAccount();
    account.open();
    expect(account.balance).toEqual(0);
  });

  xtest('Single deposit', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    expect(account.balance).toEqual(100);
  });

  xtest('Multiple deposits"', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    account.deposit(50);
    expect(account.balance).toEqual(150);
  });

  xtest('Withdraw once', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    account.withdraw(50);
    expect(account.balance).toEqual(50);
  });

  xtest('Withdraw twice', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    account.withdraw(20);
    account.withdraw(80);
    expect(account.balance).toEqual(0);
  });

  xtest('Can do multiple operations sequentially', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    account.deposit(110);
    account.withdraw(200);
    account.deposit(60);
    account.withdraw(50);
    expect(account.balance).toEqual(20);
  });

  xtest('Cannot check balance of closed account', () => {
    const account = new BankAccount();
    account.open();
    account.close();
    expect(() => account.balance).toThrow(ValueError);
  });

  xtest('Cannot deposit into closed account', () => {
    const account = new BankAccount();
    account.open();
    account.close();
    expect(() => {
      account.deposit(50);
    }).toThrow(ValueError);
  });

  xtest('Cannot deposit into closed account', () => {
    const account = new BankAccount();
    expect(() => {
      account.deposit(50);
    }).toThrow(ValueError);
  });

  xtest('Cannot withdraw from closed account', () => {
    const account = new BankAccount();
    account.open();
    account.close();
    expect(() => {
      account.withdraw(50);
    }).toThrow(ValueError);
  });

  xtest('Cannot close an account that was not opened', () => {
    const account = new BankAccount();
    expect(() => {
      account.close();
    }).toThrow(ValueError);
  });

  xtest('Cannot open an already opened account', () => {
    const account = new BankAccount();
    account.open();
    expect(() => {
      account.open();
    }).toThrow(ValueError);
  });

  xtest('Reopened account does not retain balance', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(50);
    account.close();
    account.open();
    expect(account.balance).toEqual(0);
  });

  xtest('Cannot withdraw more than deposited', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(25);
    expect(() => {
      account.withdraw(50);
    }).toThrow(ValueError);
  });

  xtest('Cannot withdraw negative', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    expect(() => {
      account.withdraw(-50);
    }).toThrow(ValueError);
  });

  xtest('Cannot deposit negative', () => {
    const account = new BankAccount();
    account.open();
    expect(() => {
      account.deposit(-50);
    }).toThrow(ValueError);
  });

  xtest('Can handle concurrent transactions', async () => {
    const account = new BankAccount();
    account.open();
    account.deposit(1000);

    for (let i = 0; i < 10; i++) {
      await adjustBalanceConcurrently(account);
      expect(account.balance).toEqual(1000);
    }
  });

  function adjustBalanceConcurrently(account) {
    const random = () => Math.floor(Math.random() * 10);

    const tasks = Array.from(
      { length: 1000 },
      () =>
        new Promise((resolve) => {
          try {
            account.deposit(5);
            setTimeout(() => {
              account.withdraw(5);
              resolve();
            }, random());
          } catch (e) {
            throw new Error(`Exception should not be thrown: ${e.message}`);
          }
        }),
    );

    return Promise.all(tasks);
  }

  xtest('Changing balance directly throws error', () => {
    const account = new BankAccount();
    account.open();
    expect(() => {
      account.balance = 100;
    }).toThrow(Error);
  });
});
