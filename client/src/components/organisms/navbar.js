import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/logo';
import Navigation from '../molecules/navigation';
import FollowMe from '../molecules/followMe';

const StyledNavbar = styled.nav`
    z-index: 10;
    position: absolute;
    padding: 40px;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        ul:last-child {
            margin-top: 20px;
        }
    }
`;

const Navbar = (props) => {

    return (
        <StyledNavbar>
            <Logo />
            <div>
                <Navigation />
                <FollowMe />
            </div>
        </StyledNavbar>
    )
}

export default Navbar;