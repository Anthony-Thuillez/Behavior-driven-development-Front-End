import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Default, TextCustom } from '../stories/text.stories';

describe('Renders Text component', () => {

    test('with a Default color state', () => {
        const { container, getByTestId } = render(<Default />);
        expect(container).toBeTruthy();
        const text = getByTestId('default-text')
        expect(text).toHaveStyleRule('color', 'rgba(255,255,255,0.85)');
    });

    test('with a TextCustom color state', () => {
        const { container, getByTestId } = render(<TextCustom />);
        expect(container).toBeTruthy();
        const text = getByTestId('textCustom-text')
        expect(text).toHaveStyleRule('color', 'rgba(255,255,255,0.85)');
    });
});