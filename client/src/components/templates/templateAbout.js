import React from 'react';
import Wrapper from '../atoms/wrapper';
import Background from '../atoms/background';
import Title from '../atoms/title';
import { Color } from '../../styles/variables';

const TemplateAbout = (props) => {

    return (
        <>
            <Background img={props.backgroundImg} />
            <Wrapper>
                <Title text={props.title} size="large" color={Color.whiteTranslucid} textMirror={props.titleMirror} />
            </Wrapper>
        </>
      )
}

export default TemplateAbout;