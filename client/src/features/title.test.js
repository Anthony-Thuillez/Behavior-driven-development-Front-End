import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Medium, Large, MediumRed, LargeRed } from '../stories/title.stories';

describe('Renders Title component', () => {

    test('with a Medium title state', () => {
        const { container, getByTestId } = render(<Medium />);
        expect(container).toBeTruthy();
        const text = getByTestId('medium-title')
        expect(text).toHaveStyleRule('font-size', '93px');
    });

    test('with a Large title state', () => {
        const { container, getByTestId } = render(<Large />);
        expect(container).toBeTruthy();
        const text = getByTestId('large-title')
        expect(text).toHaveStyleRule('font-size', '115px');
    });

    test('with a Large title state', () => {
        const { container, getByTestId } = render(<MediumRed />);
        expect(container).toBeTruthy();
        const text = getByTestId('medium-red-title')
        expect(text).toHaveStyleRule('font-size', '93px');
        expect(text).toHaveStyleRule('color', 'rgba(183,39,38,0.86)');
    });

    test('with a LargeRed title state', () => {
        const { container, getByTestId } = render(<LargeRed />);
        expect(container).toBeTruthy();
        const text = getByTestId('large-title')
        expect(text).toHaveStyleRule('font-size', '115px');
        expect(text).toHaveStyleRule('color', 'rgba(183,39,38,0.86)');
    });


});