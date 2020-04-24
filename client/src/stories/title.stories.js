import React from 'react';
import Title from '../components/atoms/title';

export const Medium = () => <Title testid="medium-title"><span>Medium Title</span></Title>;
export const Large = () => <Title size='large' testid="large-title"><span>Large Title</span></Title>;
export const MediumRed = () => <Title color='red' testid="medium-red-title"><span>Medium Red Title</span></Title>;
export const LargeRed = () => <Title color='red' size='large' testid="large-title"><span>Large Red Title</span></Title>;

