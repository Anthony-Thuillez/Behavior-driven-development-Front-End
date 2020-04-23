import React from 'react';
import Background from '../atoms/background';

function TemplateAbout(props) {

    return (
        <>
            <Background img={props.backgroundImg} />
            <h2>{props.title}</h2>
        </>
      )
}

export default TemplateAbout;