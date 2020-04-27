import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Color } from '../../styles/variables';
import Text from '../atoms/text';
import PropTypes from 'prop-types';

const animateBlockTextDecoration = keyframes`
  0% {
    height: 0;
    width: 1px;
  }
  75% {
    height: 100%;
    width: 1px;
  }
  100% {
    height: 100%;
    width: 14px;
  }
`;

const StyledBlockText = styled.div`
    position: relative;
    padding-left: 30px;
    &:before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        height: 0;
        width: 1px;
        background: ${Color.redTranslucid};
        animation-name: ${animateBlockTextDecoration};
        animation-duration: 1.1s;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
    }
    p + p {
        margin-top: 25px;
    }
`;

const BlockText = ({ className, children }) => {
    return(
        <StyledBlockText className={className} >
            {children}
        </StyledBlockText>
    )
}


export default BlockText;

/* Will show the right 'tag' within documentation */
BlockText.displayName = 'Block of text';
BlockText.defaultProps = {
    className: null,
    children: <Text />
};

BlockText.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};