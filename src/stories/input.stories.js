import React from 'react';
import Input from '../components/atoms/input';

export const Small = props => <Input size='small' testid="small-input" onChange={props.onChange} placeholder={props.placeholder}></Input>;
export const Default = props => <Input testid="default-input" onChange={props.onChange} placeholder={props.placeholder}></Input>;
export const Medium = props => <Input size='medium' testid="medium-input" onChange={props.onChange} placeholder={props.placeholder}></Input>;
export const Large = props => <Input size='large' testid="large-input" onChange={props.onChange} placeholder={props.placeholder}></Input>;
export const Disabled = props => <Input disabled testid="disabled-input" onChange={props.onChange} placeholder={props.placeholder}></Input>;
