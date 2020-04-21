import React from 'react';
import Label from '../components/atoms/label';

export const Small = () => <Label size='small' testid="small-label"><span>Small label</span></Label>;
export const Medium = () => <Label><span>Medium label</span></Label>;
export const Large= () => <Label size='large'><span>Large label</span></Label>;
