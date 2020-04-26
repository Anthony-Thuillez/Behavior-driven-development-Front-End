import React from 'react';
import Wrapper from '../atoms/wrapper';
import Background from '../atoms/background';
import Title from '../atoms/title';
import BlockText from '../molecules/blockText';
import Text from '../atoms/text'
import { Color } from '../../styles/variables';
import styled from 'styled-components';

const Template = styled.div`
    padding-top: 100px;
`;

const BlockTextMargin = styled(BlockText)`
    margin-top: 140px;
`;

const TemplateAbout = (props) => {

    return (
        <>
            <Background img={props.backgroundImg} />
            <Template>
                <Wrapper>
                    <Title text={props.title} size="large" color={Color.whiteTranslucid} textMirror={props.titleMirror} />
                    <BlockTextMargin width="387px" >
                        <Text text={props.text1} />
                        <Text text={props.text2} />
                    </BlockTextMargin>
                </Wrapper>
            </Template>
        </>
      )
}

export default TemplateAbout;