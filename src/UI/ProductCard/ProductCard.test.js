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

describe('Testing ProductCard component', () => {

    test('Add Item.', async () => {

        const { findByText, queryByTestId, findByTestId } = render(
            <App></App>
        );

        const productAdd = await screen.findByTestId('prodId1');
        UserEvent.click(productAdd);

        const nameElement = await screen.findByTestId('quantId1');
        expect(nameElement).toBeInTheDocument('2 left.');

    });

});
