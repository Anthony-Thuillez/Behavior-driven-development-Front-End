import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const sizes = {
    small:{
        fontSize: '10px',
        lineHeight: '14px',
    },
    medium: {
        fontSize: '12px',
        lineHeight: '16px',
    },
    large: {
        fontSize: '14px',
        lineHeight: '18px',
    }
}

const StyledError = styled.span`
    font-family: Roboto;
    font-weight: 900;
    font-size:  ${props => sizes[props.size].fontSize};
    line-height: ${props => sizes[props.size].lineHeight};
    padding-top: 8px;
    color: red;
`;

const Error = ({size, children, testid}) => {
    return(
        <StyledError size={size} data-testid={testid}>{children}</StyledError>
    )
}

/* Will show the right 'tag' within documentation */
Error.displayName = 'Error';
Error.defaultProps = {
    size: 'medium'
};

Error.propTypes = {
 size: PropTypes.oneOf(['small', 'medium', 'large']),
 children: PropTypes.element.isRequired
};

export default Error;