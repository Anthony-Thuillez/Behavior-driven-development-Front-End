import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { DisplayLogo } from '../stories/logo.stories';

describe('Renders Logo component', () => {

    test('with a logo image', () => {
        const { getByTestId } = render(<DisplayLogo />);
        const logo = getByTestId('logo-div')
        expect(logo).toHaveAttribute("src", "logo.png")
    });
});