import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Default } from '../stories/error.stories';

describe('Renders Error component', () => {
  test('with default behavior', () => {
    const { container, getByTestId } = render(<Default />);
    expect(container).toBeTruthy();
    const error = getByTestId('error-test')
    expect(error).toHaveStyleRule('font-size', '14px');
  });

});