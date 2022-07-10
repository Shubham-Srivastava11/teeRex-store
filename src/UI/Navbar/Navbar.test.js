import { render, screen, fireEvent, cleanup, getByTestId, queryByTestId, queryByText } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import App from '../../App';

afterEach(cleanup)
// window.fetch = jest.fn(() => {
//     const user = [{ id: '1', name: 'Jack', email: 'jack@email.com', role: 'admin' }];

//     return Promise.resolve({
//         json: () => Promise.resolve(user),
//     });
// });

describe('Testing Navbar component', () => {

    test('Check links on Navbar.', async () => {

        const { findByText } = render(
            <App></App>
        );

        const next = await screen.findByText('Products');
        expect(next).toBeInTheDocument('Products');

    });

    test('Check links on Navbar.', async () => {

        const { findByText, queryByTestId, findByTestId } = render(
            <App></App>
        );

        const cartBtn = await screen.findByTestId('cartIcon');

        UserEvent.click(cartBtn);
        const nameElement = await screen.findByText('Nothing added to Cart');

        expect(nameElement).toBeInTheDocument('Nothing added to Cart');

    });

});
