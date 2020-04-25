import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Color } from '../../styles/variables';
import PropTypes from 'prop-types';

const animateTitle = keyframes`
  0% {
    transform: translateX(20%);
  }
  100% {
    transform: translateX(0%);
  }
`

const animateTextMirror = keyframes`
  0% {
    transform: translateX(-80%) scaleX(-1);
  }
  100% {
    transform: translateX(0) scaleX(-1);
  }
`

const sizes = {
  medium: {
      fontSize: '93px',
      lineHeight: '112px',
      bottom: '-35px'
  },
  large: {
      fontSize: '115px',
      lineHeight: '169px',
      bottom: '-43px'
  }
}

const StyledTitle = styled.h1`
    position: relative;
    margin-top: 100px;
    font-family: 'Anton';
    font-size:  ${props => sizes[props.size].fontSize};
    line-height: ${props => sizes[props.size].lineHeight};
    color: ${props => props.color};
    text-transform: uppercase;
    letter-spacing: 10px;
    animation-name: ${animateTitle};
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    .textMirror {
        z-index: -1;
        position: absolute;
        left: -47px;
        bottom: ${props => sizes[props.size].bottom};
        color: ${Color.redVeryTranslucid};
        animation-name: ${animateTextMirror};
        animation-duration: 1s;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
        user-select: none;
    }
`;

const Title = ({ text, size, color, textMirror}) => {

    return(
        <StyledTitle size={size} color={color} >
            {text}
            {
                textMirror && (
                    <span className="textMirror">{textMirror}</span>
                )
            }
        </StyledTitle>
    )
}

export default Title;

/* Will show the right 'tag' within documentation */
Title.displayName = 'Title';
Title.defaultProps = {
    text: 'Test titre',
    size: 'medium',
    color: '#fff',
    textMirror: ''
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  textMirror: PropTypes.string
};