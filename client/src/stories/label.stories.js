import React from 'react';
import Label from '../components/atoms/label';

export const Default = () => <Label />;
export const Custom = () => <Label className="customLabel" text="Custom text label" />;
export const Required = () => <Label isRequired />;
