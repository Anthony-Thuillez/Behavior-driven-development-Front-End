import React from 'react';
import ItemNav from '../components/atoms/textNav';

export const Normal = () => <ItemNav testid="normal-textNav"><span>Normal item</span></ItemNav>;
export const Active= () => <ItemNav itemNav='active' color='red' testid="active-textNav"><span>Active item</span></ItemNav>;
