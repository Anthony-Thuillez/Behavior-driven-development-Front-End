import React from 'react';
import Button from '../components/atoms/button';

export const Default = () => <Button testid="default-button" text="Default button" />;
export const Small = () => <Button testid="small-button" text="Small button" size="small" />;
export const Medium = () => <Button testid="medium-button" text="Medium button" size="medium" />;
export const Large = () => <Button testid="large-button" text="Large button" size="large" />;
export const White = () => <Button testid="white-button" text="White button" color="white" />;
export const Red = () => <Button testid="red-button" text="Red button" color="red" />;
export const Disabled = () => <Button testid="disable-button" text="Disabled button" disabled />;
export const Function = () => <Button testid="func-button" text="onClick button" onClick={() => alert('click !')} />;