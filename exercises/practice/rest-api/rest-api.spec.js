import { RestAPI } from './rest-api';

describe('Rest API', () => {
  describe('user management', () => {
    test('no users', () => {
      const restAPI = new RestAPI({ users: [] });
      expect(restAPI.get('/users')).toEqual({ users: [] });
    });

    xtest('add user', () => {
      const restAPI = new RestAPI({ users: [] });
      expect(restAPI.post('/add', { user: 'Adam' })).toEqual({
        name: 'Adam',
        owes: {},
        owed_by: {},
        balance: 0,
      });
    });

    xtest('get single user', () => {
      const seedUsers = [
        { name: 'Adam', owes: {}, owed_by: {}, balance: 0 },
        { name: 'Bob', owes: {}, owed_by: {}, balance: 0 },
      ];
      const restAPI = new RestAPI({ users: seedUsers });
      const expectedUsers = [
        { name: 'Bob', owes: {}, owed_by: {}, balance: 0 },
      ];
      expect(restAPI.get('/users?users=Bob')).toEqual({ users: expectedUsers });
    });
  });

  describe('iou', () => {
    xtest('both users have 0 balance', () => {
      const seedUsers = [
        { name: 'Adam', owes: {}, owed_by: {}, balance: 0 },
        { name: 'Bob', owes: {}, owed_by: {}, balance: 0 },
      ];
      const restAPI = new RestAPI({ users: seedUsers });
      const payload = { lender: 'Adam', borrower: 'Bob', amount: 3 };
      const expectedUsers = [
        { name: 'Adam', owes: {}, owed_by: { Bob: 3 }, balance: 3 },
        { name: 'Bob', owes: { Adam: 3 }, owed_by: {}, balance: -3 },
      ];
      expect(restAPI.post('/iou', payload)).toEqual({ users: expectedUsers });
    });

    xtest('borrower has negative balance', () => {
      const seedUsers = [
        { name: 'Adam', owes: {}, owed_by: {}, balance: 0 },
        { name: 'Bob', owes: { Chuck: 3 }, owed_by: {}, balance: -3 },
        { name: 'Chuck', owes: {}, owed_by: { Bob: 3 }, balance: 3 },
      ];
      const restAPI = new RestAPI({ users: seedUsers });
      const payload = { lender: 'Adam', borrower: 'Bob', amount: 3 };
      const expectedUsers = [
        { name: 'Adam', owes: {}, owed_by: { Bob: 3 }, balance: 3 },
        { name: 'Bob', owes: { Adam: 3, Chuck: 3 }, owed_by: {}, balance: -6 },
      ];
      expect(restAPI.post('/iou', payload)).toEqual({ users: expectedUsers });
    });

    xtest('lender has negative balance', () => {
      const seedUsers = [
        { name: 'Adam', owes: {}, owed_by: {}, balance: 0 },
        { name: 'Bob', owes: { Chuck: 3 }, owed_by: {}, balance: -3 },
        { name: 'Chuck', owes: {}, owed_by: { Bob: 3 }, balance: 3 },
      ];
      const restAPI = new RestAPI({ users: seedUsers });
      const payload = { lender: 'Bob', borrower: 'Adam', amount: 3 };
      const expectedUsers = [
        { name: 'Adam', owes: { Bob: 3 }, owed_by: {}, balance: -3 },
        { name: 'Bob', owes: { Chuck: 3 }, owed_by: { Adam: 3 }, balance: 0 },
      ];
      expect(restAPI.post('/iou', payload)).toEqual({ users: expectedUsers });
    });

    xtest('lender owes borrower', () => {
      const seedUsers = [
        { name: 'Adam', owes: { Bob: 3 }, owed_by: {}, balance: -3 },
        { name: 'Bob', owes: {}, owed_by: { Adam: 3 }, balance: 3 },
      ];
      const restAPI = new RestAPI({ users: seedUsers });
      const payload = { lender: 'Adam', borrower: 'Bob', amount: 2 };
      const expectedUsers = [
        { name: 'Adam', owes: { Bob: 1 }, owed_by: {}, balance: -1 },
        { name: 'Bob', owes: {}, owed_by: { Adam: 1 }, balance: 1 },
      ];
      expect(restAPI.post('/iou', payload)).toEqual({ users: expectedUsers });
    });

    xtest('lender owes borrower less than new loan', () => {
      const seedUsers = [
        { name: 'Adam', owes: { Bob: 3 }, owed_by: {}, balance: -3 },
        { name: 'Bob', owes: {}, owed_by: { Adam: 3 }, balance: 3 },
      ];
      const restAPI = new RestAPI({ users: seedUsers });
      const payload = { lender: 'Adam', borrower: 'Bob', amount: 4 };
      const expectedUsers = [
        { name: 'Adam', owes: {}, owed_by: { Bob: 1 }, balance: 1 },
        { name: 'Bob', owes: { Adam: 1 }, owed_by: {}, balance: -1 },
      ];
      expect(restAPI.post('/iou', payload)).toEqual({ users: expectedUsers });
    });

    xtest('lender owes borrower same as new loan', () => {
      const seedUsers = [
        { name: 'Adam', owes: { Bob: 3 }, owed_by: {}, balance: -3 },
        { name: 'Bob', owes: {}, owed_by: { Adam: 3 }, balance: 3 },
      ];
      const restAPI = new RestAPI({ users: seedUsers });
      const payload = { lender: 'Adam', borrower: 'Bob', amount: 3 };
      const expectedUsers = [
        { name: 'Adam', owes: {}, owed_by: {}, balance: 0 },
        { name: 'Bob', owes: {}, owed_by: {}, balance: 0 },
      ];
      expect(restAPI.post('/iou', payload)).toEqual({ users: expectedUsers });
    });
  });
});
