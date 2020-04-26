import React from 'react';
import Title from '../components/atoms/title';

export const Default = () => <Title testid="default-title" />
export const TitleMedium = () => <Title testid="medium-title" text="Titre medium" size="medium" color="#fff" />
export const TitleLarge = () => <Title testid="large-title" text="Titre large" size="large" color="#fff" />
export const TitleMediumWithTextMirror = () => <Title testid="medium-textmiror-title" text="Titre medium miror" size="medium" color="#fff" textMirror="Titre medium" />
export const TitleLargeWithTextMirror = () => <Title testid="large-textmiror-title" text="Titre large miror" size="large" color="#fff" textMirror="Titre large" />
