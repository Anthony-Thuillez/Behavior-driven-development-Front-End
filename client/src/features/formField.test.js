import React, { Children } from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Default, Error } from '../stories/formField.stories';

describe('Renders formField component', () => {

    test('with a Default form state', () => {
        const { container } = render(<Default />);
        expect(container).toBeTruthy();
    });

    test('with a Error form state', () => {
        const { container, getByTestId } = render(<Error />);
        expect(container).toBeTruthy()
        const error = getByTestId('form-field-error-test')
        expect(error.textContent).toBe("Test label * Ce champ n'est pas valide")
    });
});