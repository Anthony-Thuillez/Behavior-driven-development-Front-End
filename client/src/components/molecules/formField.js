import React from 'react';
import styled from 'styled-components';
import InputText from '../atoms/inputText';
import Label from '../atoms/label';
import Error from '../atoms/error';
import PropTypes from 'prop-types';

const StyledField = styled.div`
    position: relative;
    & + .formField {
        margin-top: 40px;
    }
`;

const FormField = ({ className, children, error }) => {
    return(
        <StyledField className={className ? className + ' formField' : 'formField'} >
            {children}
            {
                error && (
                    <Error />
                )
            }
        </StyledField>
    )
}

export default FormField;

/* Will show the right 'tag' within documentation */
FormField.displayName = 'FormField';
FormField.defaultProps = {
    className: null,
    children: <><Label /><InputText /></>,
    error: false
};

FormField.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    error: PropTypes.bool.isRequired
};