import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBackground = styled.div`
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.img});
    background-size: 790px auto;
    background-position: center 110px;
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

const Background = ({ img }) => {
    return(
        <StyledBackground img={img} />
    )
}

/* Will show the right 'tag' within documentation */
Background.displayName = 'Background';
Background.defaultProps = {
    img: '#',
};

Background.propTypes = {
    img: PropTypes.string,
};

export default Background;
