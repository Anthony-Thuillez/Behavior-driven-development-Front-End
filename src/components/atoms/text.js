import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const weights = {
    regular: {
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '22px',
    },
    bold: {
        fontSize: '16px',
        fontWeight: '800',
        lineHeight: '22px',
    },
    regularRed: {
      fontSize: '23px',
      fontWeight: 'normal',
      lineHeight: '22px',
    }
}

const colors = {
    red: '#B72726',
    white: 'rgba(255, 255, 255, 0.85)'
}

const StyledText = styled.span`
    font-family: Avenir;
    font-style: normal;
    font-size:  ${props => weights[props.weight].fontSize};
    font-weight:  ${props => weights[props.weight].fontWeight};
    line-height: ${props => weights[props.weight].lineHeight};
    padding-top: 8px;
    color: ${props => colors[props.color]};
`;

const Text = ({weight, color, children, testid}) => {
    return(
        <StyledText weight={weight} color={color} data-testid={testid}>{children}</StyledText>
    )
}

/* Will show the right 'tag' within documentation */
Text.displayName = 'Text';
Text.defaultProps = {
    weight: 'regular',
    color: 'white'
};

Text.propTypes = {
 weight: PropTypes.oneOf(['regular', 'bold', 'regularRed']),
 color: PropTypes.oneOf(['red', 'white']),
 children: PropTypes.element.isRequired
};

export default Text;
