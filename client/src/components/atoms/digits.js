import React from 'react';
import styled from 'styled-components';
import { Color } from '../../styles/variables';
import PropTypes from 'prop-types';

const StyledDigits = styled.div`
    text-align: center;
    .digit {
        font-family: 'Anton';
        font-size: 53px;
        line-height: 71px;
        color: ${Color.whiteTranslucid};
    }
    .name {
        font-family: 'Avenir';
        font-size: 23px;
        color: ${Color.red};
    }
`;

const Digits = ({ className, digit, name, testid }) => {
    return (
        <StyledDigits data-testid={testid} className={className} >
            <p className="digit">{digit}</p>
            <p className="name">{name}</p>
        </StyledDigits>
    )
}

export default Digits;

/* Will show the right 'tag' within documentation */
Digits.displayName = 'Digits';
Digits.defaultProps = {
    className: null,
    digit: 'test digit',
    name: 'test name'
};

Digits.propTypes = {
    className: PropTypes.string,
    digit: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};