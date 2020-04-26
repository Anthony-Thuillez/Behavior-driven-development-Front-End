import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../../assets/logo.png';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
    display: block;
    width: 203px;
    height: 30px;
`;

const Logo = ({ className }) => {

    return (
        <StyledLink className={className} to="/" >
            <img src={LogoImg} alt="Logo" />
        </StyledLink>
    )
}

export default Logo;

/* Will show the right 'tag' within documentation */
Logo.displayName = 'Logo';
Logo.defaultProps = {
    className: null
};

Logo.propTypes = {
    className: PropTypes.string
};