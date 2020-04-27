import React from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from '../atoms/logo';
import Navigation from '../molecules/navigation';
import FollowMe from '../molecules/followMe';

const animateNavbar = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`

const StyledNavbar = styled.nav`
    z-index: 10;
    position: absolute;
    padding: 40px 40px 40px 0;
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
        transform: translateX(120%);
        animation-name: ${animateNavbar};
        animation-duration: 1s;
        animation-timing-function: ease-out;
        animation-delay: 0.8s;
        animation-fill-mode: forwards;
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