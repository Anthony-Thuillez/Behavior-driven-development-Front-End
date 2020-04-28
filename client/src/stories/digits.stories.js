import React from 'react';
import Digits from '../components/atoms/digits';

export const Default = () => <Digits testid="default-test" />;
export const Custom = () => <Digits testid="custom-test" digit="2,400,000,000" name="d'euros" />;

