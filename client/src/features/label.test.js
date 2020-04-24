import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { LabelRed, LabelWhite } from '../stories/label.stories';


describe('Renders Button component', () => {
    let spy;

    beforeEach(() => {
        spy = jest.fn();
    });

    test('with a LabelRed color state', () => {
        const { container, getByTestId } = render(<LabelRed />);
        expect(container).toBeTruthy();
        const label = getByTestId('small-label')
        expect(label).toHaveStyleRule('color', '#B72726');
    });

    test('with a LabelWhite color state', () => {
        const { container, getByTestId } = render(<LabelWhite />);
        expect(container).toBeTruthy();
        const label = getByTestId('medium-label')
        expect(label).toHaveStyleRule('color', '#FFFFFF');
    });
});