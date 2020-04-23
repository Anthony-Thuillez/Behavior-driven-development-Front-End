import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const types = {
    number: {
        fontFamily: 'Anton',
        fontSize: '53px',
        fontWeight: 'normal',
        lineHeight: '64px',
    },
    text: {
        fontFamily: 'Avenir',
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '19px',
    }
}



const StyledPageNumber = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
    font-family: ${props => types[props.type].fontFamily};
    font-style: normal;
    font-size:  ${props => types[props.type].fontSize};
    font-weight:  ${props => types[props.type].fontWeight};
    line-height: ${props => types[props.type].lineHeight};
    transform: rotate(-90deg);
    text-transform: uppercase;
    padding-top: 8px;
    color: #fff;
`;

const PageNumber = ({type, children, testid}) => {
    return(
        <StyledPageNumber type={type} data-testid={testid}>{children}</StyledPageNumber>
    )
}

/* Will show the right 'tag' within documentation */
PageNumber.displayName = 'Page Number';
PageNumber.defaultProps = {
    type: 'number'
};

PageNumber.propTypes = {
/** Optionnal types */
 type: PropTypes.oneOf(['number', 'text']),
 children: PropTypes.element.isRequired
};

export default PageNumber;
