import React from 'react';
import styled from 'styled-components';
import { Breakpoint } from '../../styles/variables';

const StyledWrapper = styled.div`
    margin: 0 auto;
    max-width: calc(${Breakpoint.xl} - 80px);
    @media screen and (max-width: ${Breakpoint.xl}) {
        padding: 0 40px;
        max-width: none;
    }
`;

function Wrapper({ className, children }) {

    return (
        <StyledWrapper className={className}>
            {children}
        </StyledWrapper>
    )
}

export default Wrapper;