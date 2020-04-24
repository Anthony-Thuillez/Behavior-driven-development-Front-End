import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../../assets/logo.png';

const StyledLink = styled(Link)`
    display: block;
    width: 203px;
    height: 30px;
`;

function Logo() {

    return (
        <StyledLink to="/" >
            <img src={LogoImg} alt="Logo" />
        </StyledLink>
    )
}

export default Logo;