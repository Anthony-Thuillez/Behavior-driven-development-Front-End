import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const colors = {
    red: '#B72726',
    white: '#FFFFFF'
}

const StyledLabel = styled.label`
    font-family: Avenir;
    font-weight: 500;
    font-size:  20px;
    line-height: 24px;
    padding-bottom: 8px;
    color: ${props => colors[props.color]};
`;

const Label = ({color, children, testid}) => {
    return(
        <StyledLabel color={color} data-testid={testid}>{children}</StyledLabel>
    )
}

/* Will show the right 'tag' within documentation */
Label.displayName = 'Label';
Label.defaultProps = {
    color: 'white',
    testid: 'label'
};

Label.propTypes = {
/** Optionnal colors */
 color: PropTypes.oneOf(['red', 'white']),
/** Children as ONE element */
 children: PropTypes.element.isRequired,
/** Optionnal testid */
 testid: PropTypes.string
};

export default Label;