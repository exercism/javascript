// @ts-check

import {
  purchaseInventoryIfAvailable,
  isServiceOnline,
  pickAndPurchaseFruit,
  pickFruit,
} from './fruit-picker';
import {
  setStatus,
  resetStatus,
  setResponse,
  getLastQuery,
  resetQuery,
} from './grocer';

describe('service status', () => {
  beforeEach(() => {
    resetStatus();
  });

  test('returns the initial status of the service', () => {
    expect(isServiceOnline()).toBe(false);
  });

  test('returns the status when service is online', () => {
    setStatus('ONLINE');
    expect(isServiceOnline()).toBe(true);
  });
});

describe('inventory service', () => {
  beforeEach(() => {
    resetQuery();
  });

  test('uses the query format', () => {
    pickFruit('strawberry', 5, () => {});
    expect(getLastQuery()).toEqual({
      variety: 'strawberry',
      quantity: 5,
    });
  });

  test('takes parameters for the query', () => {
    pickFruit('blueberry', 20, () => {});
    expect(getLastQuery()).toEqual({
      variety: 'blueberry',
      quantity: 20,
    });
  });

  test('returns synchronously', () => {
    setResponse(true);
    expect(pickFruit('melon', 1, (res) => res)).toBe(true);
  });

  test('returns the inventory status', () => {
    setResponse(null, false);
    expect(pickFruit('melon', 1, (err, isAvailable) => isAvailable)).toBe(
      false
    );
  });
});

describe('inventory result callback', () => {
  test('throws error if receives inventory error', () => {
    expect(() => {
      purchaseInventoryIfAvailable('inventory error');
    }).toThrow();
  });

  test('returns "PURCHASE" when inventory is available', () => {
    expect(purchaseInventoryIfAvailable(null, { quantityAvailable: 4 })).toBe(
      'PURCHASE'
    );
  });

  test('returns "NOOP" when inventory is unavailable', () => {
    expect(purchaseInventoryIfAvailable(null, false)).toBe('NOOP');
  });
});

describe('putting it together', () => {
  beforeEach(() => {
    resetQuery();
  });

  test('uses the query format', () => {
    setResponse(null, true);
    pickAndPurchaseFruit('jackfruit', 15);
    expect(getLastQuery()).toEqual({
      variety: 'jackfruit',
      quantity: 15,
    });
  });

  test('takes parameters for the query', () => {
    setResponse(null, true);
    pickAndPurchaseFruit('raspberry', 30);
    expect(getLastQuery()).toEqual({
      variety: 'raspberry',
      quantity: 30,
    });
  });

  test('throws error if receives inventory error', () => {
    expect(() => {
      pickAndPurchaseFruit('honeydew', 3);
    }).toThrow();
  });

  test('returns "NOOP" if quantity not available', () => {
    setResponse(null, false);
    expect(pickAndPurchaseFruit('apples', 12)).toBe('NOOP');
  });

  test('returns "PURCHASE" if quantity available', () => {
    setResponse(null, { quantityAvailable: 23 });
    expect(pickAndPurchaseFruit('oranges', 22)).toBe('PURCHASE');
  });
});
