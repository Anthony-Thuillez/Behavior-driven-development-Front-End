import React from 'react';
import Label from '../components/atoms/label';

export const Default = () => <Label testid="default-label" />;
export const Custom = () => <Label testid="custum-label" className="customLabel" text="Custom text label" />;
export const Required = () => <Label testid="required-label" isRequired />;
