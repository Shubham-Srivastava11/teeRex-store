import { render, screen, fireEvent, cleanup, getByTestId, queryByTestId, queryByText } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import App from '../../App';

afterEach(cleanup)

describe('Testing CartCard component', () => {

    test('Check Item in cart BEFORE adding.', async () => {

        const { findByText, queryByTestId, findByTestId, queryByDisplayValue } = render(
            <App></App>
        );

        const cart = await screen.findByTestId('cartIcon');
        UserEvent.click(cart);


        const nameElement = await screen.queryByDisplayValue('INR');

        expect(nameElement).not.toBeInTheDocument('INR');

    });

    test('Check Item in cart AFTER adding.', async () => {

        const { findByText, queryByDisplayValue, findByTestId, queryAllByDisplayValue, queryByText } = render(
            <App></App>
        );

        const productAdd = await screen.findByTestId('prodId1');
        const cart = await screen.findByTestId('cartIcon');

        UserEvent.click(productAdd);
        UserEvent.click(cart);


        const nameElement = await screen.queryByText('Checkout Price : 250');
        expect(nameElement).toBeInTheDocument('Checkout Price : 250');

    });

});
