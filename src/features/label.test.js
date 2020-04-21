import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import { Small, Medium, Large } from '../stories/label.stories';

describe('Renders Label component', () => {
    test('with default behavior', () => {
      const { container } = render(<Medium />);
      expect(container).toBeTruthy();
    });

    test('with a small size', () => {
        const { container } = render(<Small />);
        expect(container).toBeTruthy();
    });

    test('with a large size', () => {
        const { container } = render(<Large />);
        expect(container).toBeTruthy();
    });
  });