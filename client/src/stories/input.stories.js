import React from 'react';
import Input from '../components/atoms/input';

export const Small = props => <Input size='small' color='blackred' testid="small-input" onChange={props.onChange} placeholder='?'></Input>;
export const Large = props => <Input size='large' color='darkred' testid="large-input" onChange={props.onChange} placeholder=''></Input>;
export const Disabled = props => <Input disabled testid="disabled-input" onChange={props.onChange} placeholder=''></Input>;
