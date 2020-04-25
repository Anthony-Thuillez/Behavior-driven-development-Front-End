import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFollowLink = styled.a`
    display: block;
    &.ico-yt {
        height: 29px;
    }
    &.ico-insta {
        height: 23px;
    }
    img {
        height: 100%;
    }
`;

const FollowLink = (props) => {

    return (
        <StyledFollowLink
            className={props.class}
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={props.imgSrc} alt={props.imgAlt} />
        </StyledFollowLink>
    )
}

export default FollowLink;

/* Will show the right 'tag' within documentation */
FollowLink.displayName = 'FollowLink';
FollowLink.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string
};