import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Default, Small, Medium, Large, White, Red, Disabled, Function } from '../stories/button.stories';

describe('Renders Button component', () => {
    let spy;

    beforeEach(() => {
        spy = jest.fn();
    });

    test('with a default state', () => {
        const { container, getByTestId } = render(<Default onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId('default-button')
        expect(button).toHaveStyleRule('color', '#090C0D');
        expect(button.innerHTML).toMatch('Default button')
        button.click();
        expect(spy).toHaveBeenCalledTimes(0);
    });

    test('with a Small state', () => {
        const { container, getByTestId } = render(<Small onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId('small-button')
        expect(button).toHaveStyleRule('color', '#090C0D');
        expect(button.innerHTML).toMatch('Small button')
        button.click();
        expect(spy).toHaveBeenCalledTimes(0);
    });

    test('with a Medium state', () => {
        const { container, getByTestId } = render(<Medium onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId('medium-button')
        expect(button).toHaveStyleRule('color', '#090C0D');
        expect(button.innerHTML).toMatch('Medium button')
        button.click();
        expect(spy).toHaveBeenCalledTimes(0);
    });

    test('with a Large state', () => {
        const { container, getByTestId } = render(<Large onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId('large-button')
        expect(button).toHaveStyleRule('color', '#090C0D');
        expect(button.innerHTML).toMatch('Large button')
        button.click();
        expect(spy).toHaveBeenCalledTimes(0);
    });

    test('with a White state', () => {
        const { container, getByTestId } = render(<White onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId('white-button')
        expect(button).toHaveStyleRule('color', '#090C0D');
        expect(button.innerHTML).toMatch('White button')
        button.click();
        expect(spy).toHaveBeenCalledTimes(0);
    });

    test('with a Red state', () => {
        const { container, getByTestId } = render(<Red onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId('red-button')
        expect(button).toHaveStyleRule('color', '#FFFFFF');
        expect(button.innerHTML).toMatch('Red button')
        button.click();
        expect(spy).toHaveBeenCalledTimes(0);
    });

    test('with a Disabled state', () => {
        const { container, getByTestId } = render(<Disabled onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId('disable-button')
        expect(button).toHaveStyleRule('color', '#090C0D');
        expect(button.innerHTML).toMatch('Disabled button')
        button.click();
        expect(spy).toHaveBeenCalledTimes(0);
    });

});