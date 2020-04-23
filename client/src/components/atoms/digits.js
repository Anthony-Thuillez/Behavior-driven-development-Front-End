import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const types = {
    number: {
        fontFamily: 'Anton',
        fontSize: '53px',
        fontWeight: 'normal',
        lineHeight: '64px',
        color: '#fff'
    },
    text: {
        fontFamily: 'Avenir',
        fontSize: '23px',
        fontWeight: 'normal',
        lineHeight: '28px',
        color: '#B72726'
    }
}



const StyledDigits = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
    font-family: ${props => types[props.type].fontFamily};
    font-style: normal;
    font-size:  ${props => types[props.type].fontSize};
    font-weight:  ${props => types[props.type].fontWeight};
    line-height: ${props => types[props.type].lineHeight};
    padding-top: 8px;
    color: ${props => types[props.type].color};
`;

const Digits = ({type, children, testid}) => {
    return(
        <StyledDigits type={type} data-testid={testid}>{children}</StyledDigits>
    )
}

/* Will show the right 'tag' within documentation */
Digits.displayName = 'Digits';
Digits.defaultProps = {
    type: 'number'
};

Digits.propTypes = {
/** Optionnal types */
 type: PropTypes.oneOf(['number', 'text']),
 children: PropTypes.element.isRequired
};

export default Digits;
