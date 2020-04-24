import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { DisplayBackground } from '../stories/background.stories';

describe('Renders Button component', () => {
    let spy;
    beforeEach(() => {
        spy = jest.fn();
    });

    test('with a background image', () => {
        const { getByTestId } = render(<DisplayBackground />);
        const background = getByTestId('background-div')
        expect(background).toHaveStyle(`background-image: url(sergio.png)`)
    });
});