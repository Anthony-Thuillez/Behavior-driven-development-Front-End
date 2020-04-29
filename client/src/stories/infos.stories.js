import React from 'react';
import Infos from '../components/organisms/infos';
import Datas from '../components/molecules/datas';
import Digits from '../components/atoms/digits';


export const Default = () => (
    <Infos>
        <Datas>
            <Digits />
            <Digits />
            <Digits />
        </Datas>
    </Infos>
);
