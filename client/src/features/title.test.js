import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Default, TitleMedium, TitleLarge, TitleMediumWithTextMirror, TitleLargeWithTextMirror } from '../stories/title.stories';


describe('Renders Title component', () => {

    test('with a Medium title state', () => {
        const { container, getByTestId } = render(<TitleMedium />);
        expect(container).toBeTruthy();
        const text = getByTestId('medium-title')
        expect(text).toHaveStyleRule('font-size', '93px');
        expect(text).toHaveStyleRule('color', '#fff');
    });

    test('with a Large title state', () => {
        const { container, getByTestId } = render(<TitleLarge />);
        expect(container).toBeTruthy();
        const text = getByTestId('large-title')
        expect(text).toHaveStyleRule('font-size', '115px');
        expect(text).toHaveStyleRule('color', '#fff');
    });

    test('with a Default title state', () => {
        const { container, getByTestId } = render(<Default />);
        expect(container).toBeTruthy();
        const text = getByTestId('default-title')
        expect(text).toHaveStyleRule('font-size', '93px');
        expect(text).toHaveStyleRule('color', '#fff');
    });

    test('with a Medium title state', () => {
        const { container, getByTestId } = render(<TitleMediumWithTextMirror />);
        expect(container).toBeTruthy();
        const text = getByTestId('medium-textmiror-title')
        expect(text).toHaveStyleRule('font-size', '93px')
        expect(text.innerHTML).toMatch('Titre medium miror')
    });

    test('with a Medium title state', () => {
        const { container, getByTestId } = render(<TitleLargeWithTextMirror />);
        expect(container).toBeTruthy();
        const text = getByTestId('large-textmiror-title')
        expect(text).toHaveStyleRule('font-size', '115px');
        expect(text.innerHTML).toMatch('Titre large miror')
    });


    // test('with a LargeRed title state', () => {
    //     const { container, getByTestId } = render(<LargeRed />);
    //     expect(container).toBeTruthy();
    //     const text = getByTestId('large-title')
    //     expect(text).toHaveStyleRule('font-size', '115px');
    //     expect(text).toHaveStyleRule('color', 'rgba(183,39,38,0.86)');
    // });


});