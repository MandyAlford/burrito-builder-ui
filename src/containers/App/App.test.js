import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from "@testing-library/react";
import { getOrders, sendOrder } from '../../apiCalls';
import App from './App';
import { createStore } from 'redux';
import rootReducer from '../../reducers'
import { Provider } from 'react-redux';
jest.mock('../../apiCalls');

describe('App', () => {
  it('should have an order form', async () => {
    const store = createStore(rootReducer);
    getOrders.mockResolvedValueOnce({
    orders: [
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
    ]})
    const { getByText, getByRole, getByPlaceholderText, getAllByText } = render(
    <Provider store={store}>
        <App />
    </Provider>
  )
  const input = getByPlaceholderText('Name')
  fireEvent.change(input, { target: { value: 'Pat' } })
  expect(input.value).toBe('Pat')

  fireEvent.click(getByText('beans'))
  fireEvent.click(getByText('Submit Order'))

  await waitFor(() => {
    expect(getByText('Pat')).toBeInTheDocument()
    expect(getAllByText('beans')[0]).toBeInTheDocument()
    expect(getAllByText('beans')[1]).toBeInTheDocument()
  })
})
})
