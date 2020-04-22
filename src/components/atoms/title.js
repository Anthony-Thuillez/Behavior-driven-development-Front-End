import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const sizes = {
    medium: {
        fontSize: '93px',
        lineHeight: '112px',
    },
    large: {
        fontSize: '115px',
        lineHeight: '169px',
    }
}

const colors = {
    red: 'rgba(183, 39, 38, 0.86)',
    white: 'rgba(255, 255, 255, 0.85)'
}

const StyledTitle = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
    font-family: Anton;
    font-weight: 400;
    font-size:  ${props => sizes[props.size].fontSize};
    line-height: ${props => sizes[props.size].lineHeight};
    text-transform: uppercase;
    padding-top: 8px;
    color: ${props => colors[props.color]};
`;

const Title = ({size, color, children, testid}) => {
    return(
        <StyledTitle size={size} color={color} data-testid={testid}>{children}</StyledTitle>
    )
}

/* Will show the right 'tag' within documentation */
Title.displayName = 'Title';
Title.defaultProps = {
    size: 'medium',
    color: 'white'
};

Title.propTypes = {
 size: PropTypes.oneOf(['medium', 'large']),
 color: PropTypes.oneOf(['red', 'white']),
 children: PropTypes.element.isRequired
};

export default Title;