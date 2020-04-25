import React from 'react';
import Wrapper from '../atoms/wrapper';
import Background from '../atoms/background';
import Title from '../atoms/title';
import Cible from '../../assets/cibleHome.svg';
import { Color } from '../../styles/variables';
import styled, { keyframes } from 'styled-components';

const animateCible = keyframes`
  0% {
    transform: translateX(-50%) rotate(180deg);
  }
  100% {
    transform: translateX(-50%) rotate(0deg);
  }
`

const StyledCible = styled.img`
  z-index: -1;
  position: absolute;
  left: 50%;
  bottom: -90px;
  width: 903px;
  max-width: none;
  animation-name: ${animateCible};
  animation-duration: 60s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`;

const TemplateHomepage = (props) => {

  return (
    <>
      <Background img={props.backgroundImg} />
      <StyledCible src={Cible} />
      <Wrapper>
        <Title text={props.title} size="large" color={Color.whiteTranslucid} textMirror={props.titleMirror} />
      </Wrapper>
    </>
  )
}

export default TemplateHomepage;