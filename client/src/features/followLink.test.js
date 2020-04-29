import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Youtube, Instagram } from '../stories/followLink.stories';

describe('Renders FollowLing component', () => {

    test('with a youtube image', () => {
        const { getByTestId } = render(<Youtube />);
        const ytb = getByTestId('ytb-test')
        expect(ytb).toHaveAttribute("src", "yt.png")
    });

    test('with a youtube ref', () => {
        const { getByTestId } = render(<Youtube />);
        const ytb = getByTestId('ytb-test')
        expect(ytb).toHaveAttribute("href", "https://www.youtube.com/channel/UCI9tBPaYZ8kJEU0PaQLWfEw")
    });

    test('with a instagram image', () => {
        const { getByTestId } = render(<Instagram />);
        const inst = getByTestId('insta-test')
        expect(inst).toHaveAttribute("src", "insta.png")
    });

    test('with a insta ref', () => {
        const { getByTestId } = render(<Instagram />);
        const inst = getByTestId('insta-test')
        expect(inst).toHaveAttribute("href", "https://www.instagram.com/lacasadepapel/?hl=fr")
    });
});