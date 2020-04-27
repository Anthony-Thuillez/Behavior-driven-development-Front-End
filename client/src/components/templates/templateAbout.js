import React, { useState } from 'react';
import Wrapper from '../atoms/wrapper';
import Background from '../atoms/background';
import PageNumber from '../atoms/pageNumber';
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

const TemplateAbout = ({ data }) => {

    const [page, setPage] = useState('sergio');

    const handleScroll = (e) => {
        if (e.deltaY < 0) {
            setPage('sergio');
        } else if (e.deltaY > 0) {
            setPage('professor');
        }
    };

    return (
        <Template onWheel={(e) => handleScroll(e)} >
            <Wrapper>
                <PageNumber currentPage={page === 'sergio' ? 1 : 2} totalPage={2} />
                <Background
                    img={page === 'sergio' ? data.sergio.img : data.professor.img}
                    imgWidth={page === 'sergio' ? "916px" : "584px"}
                />
                <Title
                    text={page === 'sergio' ? data.sergio.title : data.professor.title}
                    size="large"
                    color={Color.whiteTranslucid}
                    textMirror={page === 'sergio' ? data.sergio.titleMirror : data.professor.titleMirror}
                />
                <BlockTextMargin width="387px" >
                    <Text text={page === 'sergio' ? data.sergio.text1 : data.professor.text1} />
                    <Text text={page === 'sergio' ? data.sergio.text2 : data.professor.text2} />
                </BlockTextMargin>
            </Wrapper>
        </Template>
      )
};

export default TemplateAbout;