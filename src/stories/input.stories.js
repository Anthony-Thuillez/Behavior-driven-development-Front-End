import React from 'react';
import Input from '../components/atoms/input';

export const Small = props => <Input size='small' color='white' testid="small-input" onChange={props.onChange}  placeholder='?'></Input>;
let Large;
export default Large = props => <Input size='large' color='red' testid="large-input" onChange={props.onChange}  placeholderText=''></Input>;
export const Disabled = props => <Input disabled testid="disabled-input" onChange={props.onChange}  placeholderText=''></Input>;
