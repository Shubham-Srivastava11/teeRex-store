import { render, screen, fireEvent, cleanup, getByTestId, queryByTestId, queryByText } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import App from '../../App';

afterEach(cleanup)

describe('Testing Filter component', () => {

    test('Filter Item By color.', async () => {

        const { findByText, queryByTestId, findByTestId, queryByDisplayValue } = render(
            <App></App>
        );

        const filter = await screen.findByTestId('filterIdRed');
        UserEvent.click(filter);

        const nameElement = await screen.queryByDisplayValue('Black Polo');

        expect(nameElement).not.toBeInTheDocument('Black Polo');


    });

    test('Filter Item By price.', async () => {

        const { findByText, queryByTestId, findByTestId, queryByDisplayValue } = render(
            <App></App>
        );

        const filter = await screen.findByTestId('filterId450');
        UserEvent.click(filter);

        const nameElement = await screen.queryByDisplayValue('INR 250');

        expect(nameElement).not.toBeInTheDocument('INR 250');


    });

});
