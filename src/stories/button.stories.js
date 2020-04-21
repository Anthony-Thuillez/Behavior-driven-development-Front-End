import React from 'react';
import Button from '../components/atoms/button';

export const Small = props => <Button size='small' testid="small-button" onClick={props.onClick}><span>Small button</span></Button>;
export const Default = props => <Button testid="default-button" onClick={props.onClick}><span>Default button</span></Button>;
export const Medium = props => <Button size='medium' testid="medium-button" onClick={props.onClick}><span>Medium button</span></Button>;
export const Large = props => <Button size='large' testid="large-button" onClick={props.onClick}><span>Large button</span></Button>;
export const Disabled = props => <Button disabled testid="disabled-button" onClick={props.onClick}><span>Disabled button</span></Button>;
