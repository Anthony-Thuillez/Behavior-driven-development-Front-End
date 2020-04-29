import React from 'react';
import styled from 'styled-components';
import { Color } from '../../styles/variables';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
    padding: 13px 20px;
    width: 100%;
    border: 0;
    font-family: 'Avenir';
    font-size: 16px;
    color: ${Color.white};
    background: ${Color.redVeryTranslucid};
    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

const InputText = ({ className, isRequired, isDisabled, onChange, value }) => {
    return (
        <StyledInput
            className={className}
            type="text"
            required={isRequired && 'required' }
            disabled={isDisabled && 'disabled' }
            onChange={onChange}
            value={value}
        />
    )
}

export default InputText;

/* Will show the right 'tag' within documentation */
InputText.displayName = 'Input';
InputText.defaultProps = {
    className: null,
    isRequired: true,
    isDisabled: false
};

InputText.propTypes = {
    className: PropTypes.string,
    isRequired: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired
};