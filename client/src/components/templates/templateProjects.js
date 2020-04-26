import React from 'react';
import Wrapper from '../atoms/wrapper';
import Title from '../atoms/title';
import BlockText from '../molecules/blockText';
import Text from '../atoms/text'
import { Color } from '../../styles/variables';
import styled from 'styled-components';

const Template = styled.div`
    padding-top: 100px;
`;

const BlockTextMargin = styled(BlockText)`
    margin-top: 45px;
`;

const TemplateProjects = (props) => {

    return (
        <>
            <Template>
                <Wrapper>
                    <Title text={props.title} size="medium" color={Color.whiteTranslucid} />
                    <BlockTextMargin width="363px" >
                        <Text text={props.text1} />
                        <Text text={props.text2} />
                        <Text text={props.text3} />
                    </BlockTextMargin>
                </Wrapper>
            </Template>
        </>
      )
}

export default TemplateProjects;