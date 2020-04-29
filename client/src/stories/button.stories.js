import React from 'react';
import Button from '../components/atoms/button';

export const Default = () => <Button text="Default button" />;
export const Small = () => <Button text="Small button" size="small" />;
export const Medium = () => <Button text="Medium button" size="medium" />;
export const Large = () => <Button text="Large button" size="large" />;
export const White = () => <Button text="White button" color="white" />;
export const Red = () => <Button text="Red button" color="red" />;
export const Disabled = () => <Button text="Disabled button" disabled />;
export const Function = () => <Button text="onClick button" onClick={() => alert('click !')} />;