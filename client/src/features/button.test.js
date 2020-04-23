import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Default, Small, Medium, Large, Disabled } from '../stories/button.stories';

describe('Renders Button component', () => {
    let spy;

    beforeEach(() => {
      spy = jest.fn();
    });

    test('with default behavior', () => {
      const { container, getByTestId } = render(<Default onClick={spy} />);
      expect(container).toBeTruthy();
      const button = getByTestId('default-button')
      expect(button).toHaveStyleRule('font-size', '14px');
      button.click();
      expect(spy).toHaveBeenCalled();
    });

    test('with a medium size', () => {
    const { container, getByTestId } = render(<Medium onClick={spy} />);
      expect(container).toBeTruthy();
      const button = getByTestId('medium-button')
      expect(button).toHaveStyleRule('font-size', '14px');
      button.click();
      expect(spy).toHaveBeenCalled();
    });

    test('with a small size', () => {
        const { container, getByTestId } = render(<Small onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId('small-button')
        expect(button).toHaveStyleRule('font-size', '12px');
        button.click();
        expect(spy).toHaveBeenCalled();
    });

    test('with a large size', () => {
        const { container, getByTestId } = render(<Large onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId('large-button')
        expect(button).toHaveStyleRule('font-size', '16px');
        button.click();
        expect(spy).toHaveBeenCalled();
    });

    test('with a disabled state', () => {
      const { container, getByTestId } = render(<Disabled onClick={spy} />);
      expect(container).toBeTruthy();
      const button = getByTestId('disabled-button')
      button.click();
      expect(spy).toHaveBeenCalledTimes(0);
    });
  });