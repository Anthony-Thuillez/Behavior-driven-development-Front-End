import React from 'react';
import Input from '../components/atoms/inputText';

export const Default = () => <Input testid="default-input" />;
export const Required = () => <Input testid="required-input" isRequired />;
export const Disabled = () => <Input testid="disabled-input" isDisabled />;