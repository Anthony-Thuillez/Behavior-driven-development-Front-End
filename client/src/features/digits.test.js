import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Default, Custom } from '../stories/digits.stories';


describe('Renders Digits component', () => {

    test('with a Digits default state', () => {
        const { container, getByTestId } = render(<Default />);
        expect(container).toBeTruthy();
    });

    test('with a Digits custom state', () => {
        const { container, getByTestId } = render(<Custom />);
        expect(container).toBeTruthy();
    });

});