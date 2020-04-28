import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Default, Custom } from '../stories/pageNumber.stories';


describe('Renders pageNumber component', () => {

    test('with a Default state', () => {
        const { container } = render(<Default />);
        expect(container).toBeTruthy();
    });

    test('with a Custom state', () => {
        const { container } = render(<Custom />);
        expect(container).toBeTruthy();
    });
});