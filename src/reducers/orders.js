export const orders = (state = [], action) => {
  switch (action.type) {
    case 'SET_ORDERS':
      return action.orders;
    case 'CREATE_ORDER':
        return [...state, action.order]
    case 'DELETE_ORDER':
        return state.filter(order => {
          return action.id !== order.id
        })
    default:
      return state;
  }
};
