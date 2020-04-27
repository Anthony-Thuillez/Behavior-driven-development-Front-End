import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledError = styled.span`
    position: absolute;
    bottom: -23px;
    left: 0;
    font-family: 'Roboto';
    font-size: 14px;
    color: red;
`;

const Error = ({ className }) => {
    return(
        <StyledError className={className} >
            Ce champ n'est pas valide
        </StyledError>
    )
}

export default Error;

/* Will show the right 'tag' within documentation */
Error.displayName = 'Error';
Error.defaultProps = {
    className: null
};

Error.propTypes = {
    className: PropTypes.string
};