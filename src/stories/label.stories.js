import React from 'react';
import Label from '../components/atoms/label';

export const Small = () => <Label size='small' testid="small-label"><span>Small label</span></Label>;
export const Medium = () => <Label testid="medium-label"><span>Medium label</span></Label>;
export const Large= () => <Label size='large' testid="large-label"><span>Large label</span></Label>;
