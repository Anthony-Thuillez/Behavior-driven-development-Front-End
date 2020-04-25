import React from 'react';
import styled from 'styled-components';
import LinkNavigation from '../atoms/linkNavigation';

const StyledNavigation = styled.ul`
    text-align: right;
    li:not(:last-child) {
        margin-bottom: 20px;
    }
`;

const Navigation = (props) => {

    return (
        <StyledNavigation>
            <li>
                <LinkNavigation to="/" text="La casa" />
            </li>
            <li>
                <LinkNavigation to="/projects" text="Nos casses" />
            </li>
            <li>
                <LinkNavigation to="/about" text="Sous le masque" />
            </li>
            <li>
                <LinkNavigation to="/contact" text="Un (r)enseignement ?" />
            </li>
        </StyledNavigation>
    )
}

export default Navigation;