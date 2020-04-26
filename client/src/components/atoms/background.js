import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBackground = styled.div`
    z-index: -2;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.img});
    background-size: 916px auto;
    background-position: center bottom;
    background-repeat: no-repeat;
    pointer-events: none;
    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(187deg, rgba(12, 15, 15, 1) 14.58%, rgba(0, 0, 0, 0) 84.55%);
    }
`;

const Background = ({ className, img, testid }) => {
    return (
        <StyledBackground className={className} data-testid={testid} img={img} />
    )
}

/* Will show the right 'tag' within documentation */
Background.displayName = 'Background';
Background.defaultProps = {
    className: null,
    img: '#'
};

Background.propTypes = {
    className: PropTypes.string,
    img: PropTypes.string
};

export default Background;
