import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

const sizes = {
    small:{
        fontSize: '15px',
        lineHeight: '17px',
        height: '30px',
        width: '30px',
    },
    large: {
        fontSize: '20px',
        lineHeight: '24px',
        height: '45px',
        width: '390px',
        backgroundColor:'rgba(183, 39, 38, 0.5)'
    }
}

const colors = {
    red:{
        backgroundColor:'rgba(183, 39, 38, 0.5)',
        color: '#fff'
    },
    white: {
        backgroundColor:'#fff',
        color:'#140C0B'
    }
}

const StyledInput = styled.input`
    font-family: Avenir;
    font-weight: 300;
    font-size:  ${props => sizes[props.size].fontSize};
    line-height: ${props => sizes[props.size].lineHeight};
    color: ${props => colors[props.color].color};
    background-color: ${props => colors[props.color].backgroundColor};
    height: ${props => sizes[props.size].height};
    width: ${props => sizes[props.size].width};
    text-align: center;
    outline: none;
    border:none;
    transition: all ease .4s;
    padding: 8px;
    margin: 5px 0 30px;
    :focus {
        border: 1px solid ${darken(0.3, '#E5E7EB')};
    }
    :disabled {
        background-color: #E5E7EB;
        cursor: not-allowed;
    }
    ::placeholder {
        color: ${props => colors[props.color].color};
    }
`;

const Input = ({size, color, onChange, onSubmit, placeholder, type, testid}) => {
    return(
        <StyledInput size={size} color={color} data-testid={testid} onChange={onChange} onSumbit={onSubmit}  placeholder={placeholder} type={type} testid={testid}/>
    )
}

/* Will show the right 'tag' within documentation */
Input.displayName = 'Input';
Input.defaultProps = {
    size: 'large',
    color: 'red',
    placeholder: '',
    testid:'large-input'
};

Input.propTypes = {
 /** Optionnal sizes */
 size: PropTypes.oneOf(['small','large']),
 /** Optionnal colors */
 color: PropTypes.oneOf(['red', 'white']),
 /** Callback when clicked */
 onChange: PropTypes.func.isRequired,
 /** Callback when clicked */
 placeholder: PropTypes.func.isRequired,
 /** Optionnal testid */
 testid: PropTypes.string,
 /** Disabled state */
 disabled: PropTypes.bool
};

export default Input;
