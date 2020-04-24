import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Number, Text } from '../stories/digits.stories';


describe('Renders Button component', () => {
    let spy;

    beforeEach(() => {
        spy = jest.fn();
    });

    test('with a small size', () => {
        const { container, getByTestId } = render(<Number />);
        expect(container).toBeTruthy();
        const digits = getByTestId('digits-number')
        expect(digits).toHaveAttribute('type', 'number');
    });

    test('with a small color state', () => {
        const { container, getByTestId } = render(<Text />);
        expect(container).toBeTruthy();
        const digits = getByTestId('digits-text')
        expect(digits).toHaveAttribute('type', 'text');
    });

});