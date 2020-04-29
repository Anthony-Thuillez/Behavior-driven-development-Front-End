import React from 'react';
import Datas from '../components/molecules/datas';
import Digits from '../components/atoms/digits';

export const Default = () => (
    <Datas testid="datas-test">
        <Digits />
        <Digits />
        <Digits />
    </Datas>
);
