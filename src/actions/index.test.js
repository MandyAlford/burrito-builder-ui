import * as actions from "../actions";

describe('actions', () => {
  it('should have a type of SET_ORDERS and a correct payload', () => {
    const ordersInfo = [
      {
          "id": 1,
          "name": "Pat",
          "ingredients": [
              "beans",
              "lettuce",
              "carnitas",
              "queso fresco",
              "jalapeno"
          ]
      },
      {
          "id": 2,
          "name": "Sam",
          "ingredients": [
              "steak",
              "pico de gallo",
              "lettuce",
              "carnitas",
              "queso fresco",
              "jalapeno"
          ]
      }
    ]
    const expectedAction = {
      type: 'SET_ORDERS',
      orders: ordersInfo
    }
    const result = actions.setOrders(ordersInfo)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of CREATE_ORDER and a correct payload', () => {
    const orderInfo =  {
      name: 'Pat',
      ingredients: ['beans']
    }
    const expectedAction = {
      type: 'CREATE_ORDER',
      order: orderInfo
    }
    const result = actions.createOrder(orderInfo)
    expect(result).toEqual(expectedAction)
  })
});
