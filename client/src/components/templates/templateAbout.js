import React from 'react';
import Wrapper from '../atoms/wrapper';
import Background from '../atoms/background';

function TemplateAbout(props) {

    return (
        <>
            <Background img={props.backgroundImg} />
            <Wrapper>
                <h2>{props.title}</h2>
            </Wrapper>
        </>
      )
}

export default TemplateAbout;