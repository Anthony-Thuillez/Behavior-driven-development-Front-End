import React from 'react';
import LinkNavigation from '../atoms/linkNavigation';

function Navigation(props) {

    return (
        <>
            <ul>
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
            </ul>
        </>
    )
}

export default Navigation;