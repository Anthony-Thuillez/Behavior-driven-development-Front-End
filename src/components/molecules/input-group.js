import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Label from '../atoms/label';
import Input from '../atoms/input';
import Error from '../atoms/error';

const StyledInputGroup = styled.div`
    display: flex;
    flex-direction: column;
    height: 68px;
    width: 100%;
    margin-bottom: 16px;
`;

const InputGroup = ({size, color, onChange, onSubmit, label, error, disabled, testid}) => {
    return(
        <StyledInputGroup>
            <Label size={size}><span>{label}</span></Label>
            <Input
                size={size}
                color={color}
                disabled={disabled} 
                onChange={onChange}
                data-testid={testid}
            />
            <Input
                size={size}
                color={color}
                onSubmit={onSubmit}
                data-testid={testid}
            />
            {error && <Error size='small'><span>There is an error !</span></Error>}
        </StyledInputGroup>
    )
}

/* Will show the right 'tag' within documentation */
InputGroup.displayName = 'InputGroup';
InputGroup.defaultProps = {
    size: 'large',
    color:'red',
    error: false,
    disabled: false
};

InputGroup.propTypes = {
 size: PropTypes.oneOf(['small', 'medium', 'large']),
 color: PropTypes.oneOf(['red', 'white', 'submit']),
 onChange: PropTypes.func.isRequired,
 onSubmit: PropTypes.func.isRequired,
 label: PropTypes.string.isRequired,
 error: PropTypes.bool,
 disabled: PropTypes.bool,
 testid: PropTypes.string
};

export default InputGroup;