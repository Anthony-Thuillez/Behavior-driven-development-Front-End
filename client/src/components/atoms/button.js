import React from 'react';
import styled from 'styled-components';
import { Color } from '../../styles/variables';
import PropTypes from 'prop-types';

const sizes = {
    small: {
        padding: '10px 12px 6px',
        fontSize: '14px'
    },
    medium: {
        padding: '15px 16px 11px',
        fontSize: '16px'
    },
    large: {
        padding: '18px 22px 14px',
        fontSize: '16px'
    }
}

const colors = {
    white: {
        backgroundColor: `${Color.white}`,
        color: `${Color.black}`,
        backgroundColorHover: `${Color.red}`,
        colorHover: `${Color.white}`
    },
    red: {
        backgroundColor: `${Color.red}`,
        color: `${Color.white}`,
        backgroundColorHover: `${Color.white}`,
        colorHover: `${Color.red}`
    }
}

const StyledButton = styled.button`
    padding: ${props => sizes[props.size].padding};
    font-family: 'Avenir';
    font-size: ${props => sizes[props.size].fontSize};
    font-weight: bold;
    letter-spacing: 1px;
    color: ${props => colors[props.color].color};
    text-transform: uppercase;
    background-color: ${props => colors[props.color].backgroundColor};
    border: 0;
    user-select: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    &:disabled {
        opacity: 0.4;
        color: black !important;
        background-color: lightgray !important;
        cursor: not-allowed;
    }
    &:hover {
        color: ${props => colors[props.color].colorHover};
        background-color: ${props => colors[props.color].backgroundColorHover};
    }
`;

const Button = ({ className, type, text, color, size, disabled, onClick }) => {

    return (
        <StyledButton
            className={className}
            type={type}
            size={size}
            color={color}
            disabled={disabled && 'disabled' }
            onClick={onClick}
        >
            {text}
        </StyledButton>
    )
}


export default Button;

/* Will show the right 'tag' within documentation */
Button.displayName = 'Button';
Button.defaultProps = {
    className: null,
    type: 'submit',
    size: 'medium',
    color: 'white'
};

// Button.propTypes = {
//     /** Optionnal types */
//     type: PropTypes.oneOf(['submit', 'default', 'disabled']),
//     /** Optionnal colors */
//     color: PropTypes.oneOf(['darkred', 'red']),
//     /** Children as ONE element */
//     // children: PropTypes.element.isRequired,
//     /** Callback when clicked */
//     // onClick: PropTypes.func.isRequired,
//     /** Callback when clicked */
//     //  onSumbit: PropTypes.func.isRequired,
//     /** Optionnal testid */
//     testid: PropTypes.string,
//     /** Disabled state */
//     disabled: PropTypes.bool
// };