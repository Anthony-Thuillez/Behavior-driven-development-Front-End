import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Default, Custom } from '../stories/blockText.stories';

describe('Renders Text component', () => {
    test('with a Default block state', () => {
        const { container, getByTestId } = render(<Default />);
        expect(container).toBeTruthy();
        const text = getByTestId('block-text')
        expect(text.innerHTML).toMatch('Test text')
    });

    test('with a BlockText custom state', () => {
        const { container, getByTestId } = render(<Custom />);
        expect(container).toBeTruthy();
        const text = getByTestId('block-text-custom')
        expect(text).toHaveStyle("width:", "500px")
    });
});