import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function LinkNavigation(props) {

    return (
        <NavLink exact to={props.to} activeClassName="active">
            {props.text}
        </NavLink>
    )
}

export default LinkNavigation;

/* Will show the right 'tag' within documentation */
LinkNavigation.displayName = 'LinkNavigation';
LinkNavigation.defaultProps = {
    to: '#',
    text: 'Test link'
};

LinkNavigation.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};