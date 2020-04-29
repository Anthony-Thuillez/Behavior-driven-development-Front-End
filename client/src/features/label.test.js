import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Default, Custom, Required } from '../stories/label.stories';


describe('Renders Label component', () => {

    test('with a Default color state', () => {
        const { container, getByTestId } = render(<Default />);
        expect(container).toBeTruthy();
        const label = getByTestId('default-label')
        expect(label).toHaveStyleRule('color', 'rgba(255,255,255,0.85)');
    });

    test('with a Custom color state', () => {
        const { container, getByTestId } = render(<Custom />);
        expect(container).toBeTruthy();
        const label = getByTestId('custum-label')
        expect(label).toHaveClass("customLabel")
        expect(label).toHaveStyleRule('color', 'rgba(255,255,255,0.85)');
    });

    test('with a Custom color state', () => {
        const { container, getByTestId } = render(<Required />);
        expect(container).toBeTruthy();
        const label = getByTestId('required-label')
        expect(label).toHaveStyleRule('color', 'rgba(255,255,255,0.85)');
    });
});