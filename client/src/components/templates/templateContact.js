import React from 'react';
import Wrapper from '../atoms/wrapper';
import Title from '../atoms/title';
import { Color } from '../../styles/variables';
import styled from 'styled-components';

const Template = styled.div`
    padding-top: 100px;
    @media screen and (max-height: 899px) {
        padding-top: 80px;
    }
`;

const TemplateContact = (props) => {

    return (
        <>
            <Template>
                <Wrapper>
                    <Title text={props.title} size="medium" color={Color.whiteTranslucid} />
                </Wrapper>
            </Template>
        </>
      )
}

export default TemplateContact;