import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Color } from '../../styles/variables';
import PropTypes from 'prop-types';

const StyledText = styled.p`
    font-family: 'Avenir';
    line-height: 22px;
    color: ${Color.whiteTranslucid};
`;

const Text = ({ className, text, testid }) => {
    return (
        <StyledText data-testid={testid} className={className}>
            {text.split('\n').map((item, key) => {
                return (
                    <Fragment key={key}>
                        {item}
                        <br />
                    </Fragment>
                )
            })}
        </StyledText>
    )
}


export default Text;

/* Will show the right 'tag' within documentation */
Text.displayName = 'Text';
Text.defaultProps = {
    className: null,
    text: 'Test text'
};

Text.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired
};