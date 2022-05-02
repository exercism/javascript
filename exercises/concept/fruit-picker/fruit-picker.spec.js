// @ts-check

import { notify } from './notifier';
import { order } from './grocer';
import { onError, onSuccess, orderFromGrocer, postOrder } from './fruit-picker';

jest.mock('./notifier', () => ({
  notify: jest.fn(),
}));

jest.mock('./grocer', () => ({
  order: jest.fn(),
}));

describe('fruit-picker', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('onSuccess should call notify with a success message', () => {
    expect(onSuccess()).toEqual(undefined);
    expect(notify).toHaveBeenCalledTimes(1);
    expect(notify).toHaveBeenCalledWith({ message: 'SUCCESS' });
  });

  test('onError should call notify with an error message', () => {
    expect(onError()).toEqual(undefined);
    expect(notify).toHaveBeenCalledTimes(1);
    expect(notify).toHaveBeenCalledWith({ message: 'ERROR' });
  });

  test('order from grocer passes callback arguments forward to order', () => {
    const query = { variety: 'apple', quantity: 10 };
    orderFromGrocer(query, onSuccess, onError);
    expect(order).toHaveBeenCalledTimes(1);
    expect(order).toHaveBeenCalledWith(query, onSuccess, onError);
  });

  test('postOrder composes a request to the grocer using the defined callbacks', () => {
    const variety = 'banana';
    const quantity = 5;
    postOrder(variety, quantity);

    expect(order).toHaveBeenCalledTimes(1);
    expect(order).toHaveBeenCalledWith(
      { variety, quantity },
      onSuccess,
      onError
    );
  });
});
