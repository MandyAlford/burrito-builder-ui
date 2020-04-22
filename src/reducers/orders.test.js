import { orders } from '../reducers/orders';

describe('Reducer: orders', () => {
  it('should return the initial state', () => {
    const result = orders(undefined, {});

    expect(result).toEqual([]);
  });

  it('should return the updated state when setting orders', () => {
    const action = {
      type: 'SET_ORDERS',
      orders: [
        'burritotime'
      ]
    }

    const result = orders([], action);
    expect(result).toEqual([
      'burritotime'
    ]);
  })

  it('should return an updated state upon creating order', () => {
    const action = {
      type: 'CREATE_ORDER',
      order:
        {
        a: 'my favorite burrito'
        }
    }

    const result = orders([], action);
    expect(result).toEqual([
      {
      a: 'my favorite burrito'
      }
    ]);
  });
});
