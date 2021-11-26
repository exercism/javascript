import { RestAPI } from './rest-api';

describe('Rest API', () => {
  describe('user management', () => {
    test('no users', () => {
      const restAPI = new RestAPI({ users: [] });
      expect(restAPI.get('/users')).toEqual({ users: [] });
    });
    test('add user', () => {
      const restAPI = new RestAPI({ users: [] });
      expect(restAPI.post('/add', { user: 'Adam' })).toEqual({
        name: 'Adam',
        owes: {},
        owed_by: {},
        balance: 0.0,
      });
    });
    test('get single user', () => {
      const seedUsers = [
        { name: 'Adam', owes: {}, owed_by: {}, balance: 0.0 },
        { name: 'Bob', owes: {}, owed_by: {}, balance: 0.0 },
      ];
      const restAPI = new RestAPI({ users: seedUsers });
      const expectedUsers = [
        { name: 'Bob', owes: {}, owed_by: {}, balance: 0.0 },
      ];
      expect(restAPI.get('/users?users=Bob')).toEqual({ users: expectedUsers });
    });
  });

  describe('iou', () => {
    test('both users have 0 balance', () => {
      const seedUsers = [
        { name: 'Adam', owes: {}, owed_by: {}, balance: 0.0 },
        { name: 'Bob', owes: {}, owed_by: {}, balance: 0.0 },
      ];
      const restAPI = new RestAPI({ users: seedUsers });
      const expectedUsers = [
        { name: 'Adam', owes: {}, owed_by: { Bob: 3.0 }, balance: 3.0 },
        { name: 'Bob', owes: { Adam: 3.0 }, owed_by: {}, balance: -3.0 },
      ];
      expect(
        restAPI.post('/iou', {
          lender: 'Adam',
          borrower: 'Bob',
          amount: 3.0,
        })
      ).toEqual({ users: expectedUsers });
    });
    test('borrower has negative balance', () => {
      const seedUsers = [
        { name: 'Adam', owes: {}, owed_by: {}, balance: 0.0 },
        { name: 'Bob', owes: { Chuck: 3.0 }, owed_by: {}, balance: -3.0 },
        { name: 'Chuck', owes: {}, owed_by: { Bob: 3.0 }, balance: 3.0 },
      ];
      const restAPI = new RestAPI({ users: seedUsers });
      const expectedUsers = [
        { name: 'Adam', owes: {}, owed_by: { Bob: 3.0 }, balance: 3.0 },
        {
          name: 'Bob',
          owes: { Adam: 3.0, Chuck: 3.0 },
          owed_by: {},
          balance: -6.0,
        },
      ];
      expect(
        restAPI.post('/iou', {
          lender: 'Adam',
          borrower: 'Bob',
          amount: 3.0,
        })
      ).toEqual({ users: expectedUsers });
    });
    test('lender has negative balance', () => {
      const seedUsers = [
        { name: 'Adam', owes: {}, owed_by: {}, balance: 0.0 },
        { name: 'Bob', owes: { Chuck: 3.0 }, owed_by: {}, balance: -3.0 },
        { name: 'Chuck', owes: {}, owed_by: { Bob: 3.0 }, balance: 3.0 },
      ];
      const restAPI = new RestAPI({ users: seedUsers });
      const expectedUsers = [
        { name: 'Adam', owes: { Bob: 3.0 }, owed_by: {}, balance: -3.0 },
        {
          name: 'Bob',
          owes: { Chuck: 3.0 },
          owed_by: { Adam: 3.0 },
          balance: 0.0,
        },
      ];
      expect(
        restAPI.post('/iou', {
          lender: 'Bob',
          borrower: 'Adam',
          amount: 3.0,
        })
      ).toEqual({ users: expectedUsers });
    });
    test('lender owes borrower', () => {
      const seedUsers = [
        { name: 'Adam', owes: { Bob: 3.0 }, owed_by: {}, balance: -3.0 },
        { name: 'Bob', owes: {}, owed_by: { Adam: 3.0 }, balance: 3.0 },
      ];
      const restAPI = new RestAPI({ users: seedUsers });
      const expectedUsers = [
        { name: 'Adam', owes: { Bob: 1.0 }, owed_by: {}, balance: -1.0 },
        { name: 'Bob', owes: {}, owed_by: { Adam: 1.0 }, balance: 1.0 },
      ];
      expect(
        restAPI.post('/iou', {
          lender: 'Adam',
          borrower: 'Bob',
          amount: 2.0,
        })
      ).toEqual({ users: expectedUsers });
    });
    test('lender owes borrower less than new loan', () => {
      const seedUsers = [
        { name: 'Adam', owes: { Bob: 3.0 }, owed_by: {}, balance: -3.0 },
        { name: 'Bob', owes: {}, owed_by: { Adam: 3.0 }, balance: 3.0 },
      ];
      const restAPI = new RestAPI({ users: seedUsers });
      const expectedUsers = [
        { name: 'Adam', owes: {}, owed_by: { Bob: 1.0 }, balance: 1.0 },
        { name: 'Bob', owes: { Adam: 1.0 }, owed_by: {}, balance: -1.0 },
      ];
      expect(
        restAPI.post('/iou', {
          lender: 'Adam',
          borrower: 'Bob',
          amount: 4.0,
        })
      ).toEqual({ users: expectedUsers });
    });
    test('lender owes borrower same as new loan', () => {
      const seedUsers = [
        { name: 'Adam', owes: { Bob: 3.0 }, owed_by: {}, balance: -3.0 },
        { name: 'Bob', owes: {}, owed_by: { Adam: 3.0 }, balance: 3.0 },
      ];
      const restAPI = new RestAPI({ users: seedUsers });
      const expectedUsers = [
        { name: 'Adam', owes: {}, owed_by: {}, balance: 0.0 },
        { name: 'Bob', owes: {}, owed_by: {}, balance: 0.0 },
      ];
      expect(
        restAPI.post('/iou', {
          lender: 'Adam',
          borrower: 'Bob',
          amount: 3.0,
        })
      ).toEqual({ users: expectedUsers });
    });
  });
});
