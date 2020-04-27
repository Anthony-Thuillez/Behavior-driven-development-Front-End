import React from 'react';
import styled from 'styled-components';
import formField from '../molecules/formField';
import PropTypes from 'prop-types';


const StyledForm = styled.form`

`;

const Form = ({ className, children, onSubmit }) => {
    return(
        <StyledForm className={className} onSubmit={onSubmit} >
            {children}
        </StyledForm>
    )
}

export default Form;

/* Will show the right 'tag' within documentation */
// Form.displayName = 'FormField';
// Form.defaultProps = {
//     className: null,
//     children: <><Label /><InputText /></>,
//     error: false
// };

// Form.propTypes = {
//     className: PropTypes.string,
//     children: PropTypes.node.isRequired,
//     error: PropTypes.bool.isRequired
// };