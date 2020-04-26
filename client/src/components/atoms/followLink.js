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

const FollowLink = ({ className, href, imgSrc, imgAlt }) => {

    return (
        <StyledFollowLink
            className={className}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={imgSrc} alt={imgAlt} />
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