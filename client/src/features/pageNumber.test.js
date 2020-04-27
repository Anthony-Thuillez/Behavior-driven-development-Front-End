import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Number, Text } from '../stories/pageNumber.stories';


describe('Renders Button component', () => {

    test('with a small size', () => {
        const { container, getByTestId } = render(<Number />);
        expect(container).toBeTruthy();
        const digits = getByTestId('page-number-int')
        expect(digits).toHaveAttribute('type', 'number');
    });

    test('with a small color state', () => {
        const { container, getByTestId } = render(<Text />);
        expect(container).toBeTruthy();
        const digits = getByTestId('page-number-text')
        expect(digits).toHaveAttribute('type', 'text');
    });
});