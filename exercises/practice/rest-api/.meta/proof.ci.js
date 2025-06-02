export class RestAPI {
  constructor(database = { users: [] }) {
    this.database = database;
  }

  get(url) {
    const [path, params] = url.split('?');
    switch (path) {
      case '/users': {
        if (params === undefined || params === '') {
          return { users: this.database.users };
        }

        const parameterList = params.split('&');
        for (const pam of parameterList) {
          const [pName, pData] = pam.split('=');
          if (pName === 'users') {
            return {
              users: this.database.users.filter((user) =>
                pData.includes(user.name),
              ),
            };
          }
        }

        return { users: this.database.users };
      }
      default:
        break;
    }
  }

  post(url, payload) {
    if (payload === undefined) return;

    switch (url) {
      case '/add': {
        const existingUser = this.database.users.find(
          (user) => user.name === payload.user,
        );
        if (existingUser) return existingUser;
        const newUser = {
          name: payload.user,
          owes: {},
          owed_by: {},
          balance: 0,
        };
        this.database.users.push(newUser);

        return newUser;
      }
      case '/iou': {
        const { lender, borrower, amount } = payload;
        for (const user of this.database.users) {
          let amountValue = Number(amount);
          if (user.name === lender) {
            user.balance += amountValue;
            if (borrower in user.owes) {
              amountValue = user.owes[borrower] - amountValue;
              if (amountValue <= 0) {
                delete user.owes[borrower];
              } else {
                user.owes[borrower] = amountValue;
                continue;
              }
            }
            if (!(borrower in user.owed_by)) {
              user.owed_by[borrower] = 0;
            }
            user.owed_by[borrower] += Math.abs(amountValue);
            if (user.owed_by[borrower] <= 0) {
              delete user.owed_by[borrower];
            }
          } else if (user.name === borrower) {
            user.balance -= amountValue;
            if (lender in user.owed_by) {
              amountValue = user.owed_by[lender] - amountValue;
              if (amountValue <= 0) {
                delete user.owed_by[lender];
              } else {
                user.owed_by[lender] = amountValue;
                continue;
              }
            }
            if (!(lender in user.owes)) {
              user.owes[lender] = 0;
            }
            user.owes[lender] += Math.abs(amountValue);
            if (user.owes[lender] <= 0) {
              delete user.owes[lender];
            }
          }
        }

        return this.get(`/users?users=${lender},${borrower}`);
      }
      default:
        break;
    }
  }
}
