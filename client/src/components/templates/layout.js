import React from 'react';
import styled from 'styled-components';
import { Breakpoint } from '../../styles/variables';

const MainWrapper = styled.div`
    padding: 40px 0;
    margin: 0 auto;
    height: 100vh;
    max-width: calc(${Breakpoint.xl} - 80px);
    @media screen and (max-width: ${Breakpoint.xl}) {
        padding: 40px;
        max-width: none;
    }
    &:before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(183, 59, 38, 0.11) 20.95%, rgba(183, 39, 38, 0) 93.56%);
        pointer-events: none;
    }
`;

function Layout({ children }) {

    return (
        <MainWrapper>
            {children}
        </MainWrapper>
      )
}

export default Layout;