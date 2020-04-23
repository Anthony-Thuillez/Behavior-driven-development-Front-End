import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Small, Large, Disabled } from '../stories/input.stories';

describe('Renders Button component', () => {
    let spy;

    beforeEach(() => {
        spy = jest.fn();
    });

    test('with a small size', () => {
        const { container, getByTestId } = render(<Small />);
        expect(container).toBeTruthy();
        const input = getByTestId('small-input')
        expect(input).toHaveStyleRule('font-size', '15px');
        expect(spy).toHaveBeenCalledTimes(0);
    });

    test('with a small color state', () => {
        const { container, getByTestId } = render(<Small />);
        expect(container).toBeTruthy();
        const input = getByTestId('small-input')
        expect(input).toHaveStyleRule('color', '#140C0B');
        expect(spy).toHaveBeenCalledTimes(0);
    });

    test('with a large size', () => {
        const { container, getByTestId } = render(<Large />);
        expect(container).toBeTruthy();
        const input = getByTestId('large-input')
        expect(input).toHaveStyleRule('font-size', '20px');
        expect(spy).toHaveBeenCalledTimes(0);
    });

    test('with a small color state', () => {
        const { container, getByTestId } = render(<Small />);
        expect(container).toBeTruthy();
        const input = getByTestId('small-input')
        expect(input).toHaveStyleRule('color', '#140C0B');
        expect(spy).toHaveBeenCalledTimes(0);
    });

    test('with a disabled state', () => {
        const { container, getByTestId } = render(<Disabled />);
        expect(container).toBeTruthy();
        const input = getByTestId('disabled-input')
        expect(spy).toHaveBeenCalledTimes(0);
    });

    test('with a input work', () => {
        const { container, getByTestId } = render(<Small />);
        const input = getByTestId('small-input')
        fireEvent.change(input, { target: { value: '23' } })
        expect(input.value).toBe('23')
    })

});