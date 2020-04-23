import React from 'react';
import Digits from '../components/atoms/digits';

export const Number = () => <Digits type="number" testid="digits-number"><span>140,000,000</span></Digits>;
export const Text = () => <Digits type="text" testid="digits-text"><span>d'euros déversés sur Madrid</span></Digits>;

