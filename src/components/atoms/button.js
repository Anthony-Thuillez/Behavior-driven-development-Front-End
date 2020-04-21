import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

const sizes = {
    small:{
        fontSize: '12px',
        lineHeight: '16px',
    },
    medium: {
        fontSize: '14px',
        lineHeight: '18px',
    },
    large: {
        fontSize: '16px',
        lineHeight: '20px',
    }
}

const StyledButton = styled.button`
    font-family: Roboto;
    font-weight: 400;
    font-size:  ${props => sizes[props.size].fontSize};
    line-height: ${props => sizes[props.size].lineHeight};
    color: #000;
    width: 100%;
    outline: none;
    transition: all ease .4s;
    padding: 16px;
    border-radius: 4px;
    border: 1px solid #F4F6F9;
    background-color: #22D089;
    cursor: pointer;
    :disabled {
        background-color: #E5E7EB;
        color: #999999;
        cursor: not-allowed;
    };
    :hover {
        background-color: ${darken(0.1, '#22D089')};
    };
    :hover:disabled {
        background-color: #E5E7EB;
    }
`;

const Button = ({size, children, onClick, testid, disabled}) => {
    return(
    <StyledButton size={size} data-testid={testid} onClick={onClick} disabled={disabled}>{children}</StyledButton>
    )
}

/* Will show the right 'tag' within documentation */
Button.displayName = 'Button';
Button.defaultProps = {
    size: 'medium',
    testid: 'button',
    disabled: false,
};

Button.propTypes = {
  /** Optionnal sizes */
 size: PropTypes.oneOf(['small', 'medium', 'large']),
 /** Children as ONE element */
 children: PropTypes.element.isRequired,
 /** Callback when clicked */
 onClick: PropTypes.func.isRequired,
 /** Optionnal testid */
 testid: PropTypes.string,
 /** Disabled state */
 disabled: PropTypes.bool
};

export default Button;