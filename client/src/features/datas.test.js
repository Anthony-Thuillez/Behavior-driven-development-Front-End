import React, { Children } from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Default } from '../stories/datas.stories';

describe('Renders Default component', () => {

    test('with a Default datas state', () => {
        const { container, getByTestId } = render(<Default />);
        expect(container).toBeTruthy();
        console.log(container)
    });
});