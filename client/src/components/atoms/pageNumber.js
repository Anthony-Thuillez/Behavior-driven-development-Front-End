import React from 'react';
import styled from 'styled-components';
import { Color } from '../../styles/variables';
import PropTypes from 'prop-types';

const StyledPageNumber = styled.div`
    z-index: 9;
    position: absolute;
    top: 40%;
    right: 16%;
    min-width: 100px;
    transform: rotate(-90deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${Color.white};
    span {
        font-family: 'Anton';
        font-size: 53px;
    }
    p {
        font-family: 'Avenir';
        font-size: 16px;
        text-transform: uppercase;
    }
`;

const PageNumber = ({ className, currentPage, totalPage, testid }) => {
    return (
        <StyledPageNumber data-testid={testid} className={className} >
            <span>{currentPage} / {totalPage}</span>
            <p>Scroll</p>
        </StyledPageNumber>
    )
}

export default PageNumber;

/* Will show the right 'tag' within documentation */
PageNumber.displayName = 'Page Number';
PageNumber.defaultProps = {
    className: null,
    currentPage: 1,
    totalPage: 2
};

PageNumber.propTypes = {
    className: PropTypes.string,
    currentPage: PropTypes.number.isRequired,
    totalPage: PropTypes.number.isRequired
};