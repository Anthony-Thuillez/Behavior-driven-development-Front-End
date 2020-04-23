import React from 'react';
import Error from '../components/atoms/error';

export const Small = () => <Error size='small' testid="small-error"><span>Small error</span></Error>;
export const Medium = () => <Error testid="medium-error"><span>Medium error</span></Error>;
export const Large= () => <Error size='large' testid="large-error"><span>Large error</span></Error>;
