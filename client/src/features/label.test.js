import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Small, Medium, Large } from '../stories/label.stories';

describe('Renders Label component', () => {
    test('with default behavior', () => {
      const { container, getByTestId } = render(<Medium />);
      expect(container).toBeTruthy();
      const label = getByTestId('medium-label')
      expect(label).toHaveStyleRule('font-size', '14px');
    });

    test('with a small size', () => {
        const { container, getByTestId } = render(<Small />);
        expect(container).toBeTruthy();
        const label = getByTestId('small-label')
        expect(label).toHaveStyleRule('font-size', '12px');
    });

    test('with a large size', () => {
        const { container, getByTestId } = render(<Large />);
        expect(container).toBeTruthy();
        const label = getByTestId('large-label')
      expect(label).toHaveStyleRule('font-size', '16px');
    });
  });