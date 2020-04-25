import React from 'react';
import Wrapper from '../atoms/wrapper';
import Background from '../atoms/background';
import Cible from '../../assets/cibleHome.svg';
import styled, { keyframes } from 'styled-components';

const animateCible = keyframes`
  0% {
    transform: translateX(-50%) rotate(45deg);
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
    transform: translateX(-50%) rotate(45deg);
    width: 903px;
    max-width: none;
    animation-name: ${animateCible};
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
`;

function TemplateHomepage(props) {

    return (
        <>
            <Background img={props.backgroundImg} />
            <StyledCible src={Cible} />
            <Wrapper>
              <h2>{props.title}</h2>
            </Wrapper>
        </>
      )
}

export default TemplateHomepage;