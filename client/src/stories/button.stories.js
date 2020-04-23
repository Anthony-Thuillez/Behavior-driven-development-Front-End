import React from 'react';
import Button from '../components/atoms/button';

export const Submit = props => <Button type='submit' color='white' testid="submit-button" onClick={props.onClick}><span>Envoyer</span></Button>;
export const Default = props => <Button type='default' color='red' testid="default-button" onClick={props.onClick}><span>Default button</span></Button>;
export const Disabled = props => <Button disabled testid="disabled-button" onClick={props.onClick}><span>Disabled button</span></Button>;
