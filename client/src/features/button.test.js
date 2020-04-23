import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Submit, Default, Disabled } from '../stories/button.stories';

describe('Renders Button component', () => {
    let spy;

    beforeEach(() => {
        spy = jest.fn();
    });

    test('with a submit color state', () => {
        const { container, getByTestId } = render(<Submit onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId('submit-button')
        expect(button).toHaveStyleRule('color', '#B72726');
        button.click();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    test('with a submit state', () => {
        const { container, getByTestId } = render(<Submit onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId('submit-button')
        button.click();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    test('with a default state', () => {
        const { container, getByTestId } = render(<Default onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId('default-button')
        button.click();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    test('with a default color state', () => {
        const { container, getByTestId } = render(<Default onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId('default-button')
        expect(button).toHaveStyleRule('color', '#fff');
        button.click();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    test('with a disabled state', () => {
        const { container, getByTestId } = render(<Disabled onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId('disabled-button')
        button.click();
        expect(spy).toHaveBeenCalledTimes(0);
    });
});