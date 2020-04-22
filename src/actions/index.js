export const setOrders = orders => ({
  type: 'SET_ORDERS',
  orders
});

export const createOrder = order => ({
  type: 'CREATE_ORDER',
  order
});

export const deleteOrder = id => ({
  type: 'DELETE_ORDER',
  id
});
