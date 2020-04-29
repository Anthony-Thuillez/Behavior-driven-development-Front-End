import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Color } from '../../styles/variables';

const StyledLabel = styled.label`
    font-family: 'Avenir';
    font-size:  17px;
    color: ${Color.whiteTranslucid};
    span {
        color: red;
    }
    & + input {
        margin-top: 20px;
    }
`;

const Label = ({ className, text, isRequired, testid }) => {
    return (
        <StyledLabel data-testid={testid} className={className} >
            {text}
            {
                isRequired && (
                    <span> * </span>
                )
            }
        </StyledLabel>
    )
}

export default Label;

/* Will show the right 'tag' within documentation */
Label.displayName = 'Label';
Label.defaultProps = {
    className: null,
    text: 'Test label',
    isRequired: true
};

Label.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    isRequired: PropTypes.bool.isRequired
};