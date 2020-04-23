import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Small, Medium, Large } from '../stories/error.stories';

describe('Renders Error component', () => {
    test('with default behavior', () => {
      const { container, getByTestId } = render(<Medium />);
      expect(container).toBeTruthy();
      const error = getByTestId('medium-error')
      expect(error).toHaveStyleRule('font-size', '12px');
    });

    test('with a small size', () => {
        const { container, getByTestId } = render(<Small />);
        expect(container).toBeTruthy();
        const error = getByTestId('small-error')
        expect(error).toHaveStyleRule('font-size', '10px');
    });

    test('with a large size', () => {
        const { container, getByTestId } = render(<Large />);
        expect(container).toBeTruthy();
        const error = getByTestId('large-error')
        expect(error).toHaveStyleRule('font-size', '14px');
    });
  });