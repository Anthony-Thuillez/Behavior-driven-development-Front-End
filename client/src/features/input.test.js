import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Default, Required, Disabled } from '../stories/inputText.stories';

describe('Renders Input component', () => {
    let spy;

    beforeEach(() => {
        spy = jest.fn();
    });

    test('with a Default size', () => {
        const { container, getByTestId } = render(<Default />);
        expect(container).toBeTruthy();
        const input = getByTestId('default-input')
        expect(input).toHaveStyleRule('font-size', '16px');
        expect(input).toHaveStyleRule('color', '#FFFFFF');
    });

    test('with a large size', () => {
        const { container, getByTestId } = render(<Required />);
        expect(container).toBeTruthy();
        const input = getByTestId('required-input')
        expect(input).toHaveStyleRule('font-size', '16px');
        expect(input).toHaveStyleRule('color', '#FFFFFF');
    });

    test('with a large size', () => {
        const { container, getByTestId } = render(<Disabled />);
        expect(container).toBeTruthy();
        const input = getByTestId('disabled-input')
        expect(input).toHaveStyleRule('font-size', '16px');
        expect(input).toHaveStyleRule('color', '#FFFFFF');
    });

    test('with a disabled input', () => {
        const { container, getByTestId } = render(<Disabled onChange={spy} />);
        expect(container).toBeTruthy();
        const input = getByTestId('disabled-input')
        fireEvent.change(input, { target: { value: '' } })
        expect(input.value).toBe('')
        expect(spy).toHaveBeenCalledTimes(0);
    });

    test('with large input', () => {
        const { getByTestId } = render(<Default onChange={spy} />);
        const input = getByTestId('default-input')
        fireEvent.change(input, { target: { value: 'test' } })
        expect(input.value).toBe('test')
        expect(spy).toHaveBeenCalledTimes(0);
    })

    test('with large input', () => {
        const { getByTestId } = render(<Required onChange={spy} />);
        const input = getByTestId('required-input')
        fireEvent.change(input, { target: { value: 'test' } })
        expect(input.value).toBe('test')
        expect(spy).toHaveBeenCalledTimes(0);
    })

});