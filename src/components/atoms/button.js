import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

const types = {
    submit:{
        fontSize: '20px',
        lineHeight: '24px',
        height: '45px',
        width: '90px', 
        alignSelf:'flex-end'
    },
    default : {
        fontSize: '20px',
        lineHeight: '24px',
        height: '45px',
        width: '150px',
        alignSelf:'center'
    },
    disabled : {
        fontSize: '15px',
        lineHeight: '24px',
        height: '45px',
        width: '150px',
        alignSelf:'auto'
    }
}
const colors = {
    white:{
        backgroundColor: '#fff',
        color: '#B72726'
    },
    red : {
        backgroundColor: '#B72726',
        color: '#fff'
    }
}

const StyledButton = styled.button`
    font-family: Avenir;
    font-weight: 400;
    font-size:  ${props => types[props.type].fontSize};
    line-height: ${props => types[props.type].lineHeight};
    background-color: ${props => colors[props.color].backgroundColor};
    color: ${props => colors[props.color].color};
    width: ${props => types[props.type].width};
    height: ${props => types[props.type].height};
    border: none;
    outline: none;
    transition: all ease .4s;
    cursor: pointer;
    align-self: ${props => types[props.type].alignSelf};
    :disabled {
        background-color: #E5E7EB;
        color: #999999;
        cursor: not-allowed;
    };
    :hover {
        background-color: ${darken(0.1, '#B72726')};
    };
    :hover:disabled {
        background-color: #E5E7EB;
    }
`;

const Button = ({type, color, children, onClick, testid, disabled}) => {
    return(
    <StyledButton type={type} color={color} data-testid={testid} onClick={onClick} disabled={disabled}>{children}</StyledButton>
    )
}

/* Will show the right 'tag' within documentation */
Button.displayName = 'Button';
Button.defaultProps = {
    type: 'submit',
    color: 'white',
    testid: 'button',
    disabled: false,
};

Button.propTypes = {
  /** Optionnal types */
 type: PropTypes.oneOf(['submit', 'default', 'disabled']),
  /** Optionnal colors */
 color: PropTypes.oneOf(['white', 'red']),
 /** Children as ONE element */
 children: PropTypes.element.isRequired,
 /** Callback when clicked */
 onClick: PropTypes.func.isRequired,
 /** Callback when clicked */
 onSumbit: PropTypes.func.isRequired,
 /** Optionnal testid */
 testid: PropTypes.string,
 /** Disabled state */
 disabled: PropTypes.bool
};

export default Button;