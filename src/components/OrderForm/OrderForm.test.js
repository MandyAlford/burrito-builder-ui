import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from "@testing-library/react";
import { sendOrder } from '../../apiCalls';
import OrderForm from './OrderForm';
import { createStore } from 'redux';
import rootReducer from '../../reducers'
import { Provider } from 'react-redux';
jest.mock('../../apiCalls');

describe('OrderForm', () => {

  it('should update local state when handleNameChange is called', async() =>  {
    const store = createStore(rootReducer);
    sendOrder.mockResolvedValueOnce({
      id: 2,
      name: 'Pat',
      ingredients: ['beans']
    })
    const { getByText, getByRole, getByPlaceholderText } = render(
    <Provider store={store}>
        <OrderForm />
    </Provider>
  )
  const input = getByPlaceholderText('Name')
  fireEvent.change(input, { target: { value: 'Pat' } })
  expect(input.value).toBe('Pat')

  fireEvent.click(getByText('beans'))
  fireEvent.click(getByText('Submit Order'))
});
});
