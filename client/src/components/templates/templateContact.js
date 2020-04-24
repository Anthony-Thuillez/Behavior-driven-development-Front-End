import React from 'react';
import Wrapper from '../atoms/wrapper';

function TemplateContact(props) {

    return (
        <>
            <Wrapper>
                <h2>{props.title}</h2>
            </Wrapper>
        </>
      )
}

export default TemplateContact;