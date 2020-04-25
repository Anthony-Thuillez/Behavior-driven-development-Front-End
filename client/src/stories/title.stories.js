import React from 'react';
import Title from '../components/atoms/title';

export const Default = () => <Title />
export const TitleMedium = () => <Title text="Titre medium" size="medium" color="#fff" />
export const TitleLarge = () => <Title text="Titre large" size="large" color="#fff" />
export const TitleMediumWithTextMirror = () => <Title text="Titre medium" size="medium" color="#fff" textMirror="Titre medium" />
export const TitleLargeWithTextMirror = () => <Title text="Titre large" size="large" color="#fff" textMirror="Titre large" />