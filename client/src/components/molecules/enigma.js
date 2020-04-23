import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import lock from '../../assets/lock.png'
import {Small} from '../../stories/input.stories';

const StyledEnigma = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:auto;
    margin-bottom: 16px;

`;

const Enigma = ({onSubmit, testid, error}) => {
    return(
        <StyledEnigma onSubmit={onSubmit} data-testid={testid}>
           <img src={lock} width="100%" alt="lock" />
           <div className="enigma-sub">
            <Small />
            <Small />
            <Small />
            <Small />
           </div>
        </StyledEnigma>
    )
}

/* Will show the right 'tag' within documentation */
Enigma.displayName = 'Form';
Enigma.defaultProps = {
    error: false,
    testid:"main-form"
};

Enigma.propTypes = {
 onSubmit: PropTypes.func.isRequired,
 label: PropTypes.string.isRequired,
 error: PropTypes.bool,
 testid: PropTypes.string
};

export default Enigma;