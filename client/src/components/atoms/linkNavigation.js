import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Color } from '../../styles/variables';
import PropTypes from 'prop-types';

const StyledNavLink = styled(NavLink)`
    position: relative;
    font-family: 'Anton';
    font-size: 22px;
    line-height: 32px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    text-decoration: none;
    color: ${Color.whiteTranslucid};
    transition: color 0.2s ease-in-out;
    user-select: none;
    &:after {
        position: absolute;
        content: '';
        margin-left: 40px;
        top: 50%;
        height: 20px;
        width: 30px;
        background: ${Color.red};
        opacity: 0;
        transform: translateY(-53%);
        transition: margin-left 0.3s ease-in-out, opacity 0.2s ease-in-out;
    }
    &:hover {
        color: ${Color.red};
    }
    &.active {
        color: ${Color.red};
        &:after {
            margin-left: 10px;
            opacity: 1;
        }
    }
`;

const LinkNavigation = ({ className, to, text}) => {

    return (
        <StyledNavLink className={className} exact to={to} activeClassName="active">
            {text}
        </StyledNavLink>
    )
}

export default LinkNavigation;

/* Will show the right 'tag' within documentation */
LinkNavigation.displayName = 'LinkNavigation';
LinkNavigation.defaultProps = {
    className: null,
    to: '/',
    text: 'Default Link'
};

LinkNavigation.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};