import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Default } from '../stories/followMe.stories';

describe('Renders Navigation component', () => {
    let spy;

    beforeEach(() => {
        spy = jest.fn();
    });

    test('with a default state', () => {
        const { container, getByTestId } = render(<Default onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId('follow-default')
        button.click();
        expect(spy).toHaveBeenCalledTimes(0);
    });

});