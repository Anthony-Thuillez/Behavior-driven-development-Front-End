import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Regular, Bold, RegularRed } from '../stories/text.stories';

describe('Renders Text component', () => {

    test('with a Regular color state', () => {
        const { container, getByTestId } = render(<Regular />);
        expect(container).toBeTruthy();
        const text = getByTestId('regular-text')
        expect(text).toHaveStyleRule('color', 'rgba(255,255,255,0.85)');
    });

    test('with a Bold color state', () => {
        const { container, getByTestId } = render(<Bold />);
        expect(container).toBeTruthy();
        const text = getByTestId('bold-text')
        expect(text).toHaveStyleRule('color', 'rgba(255,255,255,0.85)');
    });

    test('with a Bold color state', () => {
        const { container, getByTestId } = render(<Bold />);
        expect(container).toBeTruthy();
        const text = getByTestId('bold-text')
        expect(text).toHaveStyleRule('font-weight', '800');
    });

    test('with a RegularRed color state', () => {
        const { container, getByTestId } = render(<RegularRed />);
        expect(container).toBeTruthy();
        const text = getByTestId('red-text')
        expect(text).toHaveStyleRule('color', '#B72726');
    });

    test('with a RegularRed color state', () => {
        const { container, getByTestId } = render(<RegularRed />);
        expect(container).toBeTruthy();
        const text = getByTestId('red-text')
        expect(text).toHaveStyleRule('font-weight', 'normal');
    });
});