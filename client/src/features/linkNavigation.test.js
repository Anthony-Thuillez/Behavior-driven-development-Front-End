import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Default, Active } from '../stories/linkNavigation.stories';

describe('Renders Button component', () => {

    test('with a link state', () => {
        const { container, getByTestId } = render(<Default />);
        expect(container).toBeTruthy();
        const linkNav = getByTestId('link-nav')
        expect(container.innerHTML).toMatch('Default Link')
        expect(linkNav).toHaveAttribute('href', '/')
    });

    test('with a linkActive state', () => {
        const { container, getByTestId } = render(<Active />);
        expect(container).toBeTruthy();
        const linkActive = getByTestId('link-nav-active')
        expect(linkActive).toHaveClass("active")
        expect(linkActive.innerHTML).toMatch('Active Link')
        expect(linkActive).toHaveAttribute('href', '/')
        expect(linkActive).toHaveStyleRule('color', 'rgba(255,255,255,0.85)')
    });


});