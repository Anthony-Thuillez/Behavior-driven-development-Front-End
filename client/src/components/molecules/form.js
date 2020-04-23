import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Error from '../atoms/error';
import Large from '../../stories/input.stories';
import LabelWhite from '../../stories/label.stories';
import Submit from '../../stories/button.stories';


const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:auto;
    margin-bottom: 16px;
`;

const Form = ({onSubmit, testid, error}) => {
    return(
        <StyledForm onSubmit={onSubmit} data-testid={testid}>
           <LabelWhite />
            <Large />
            <LabelWhite />
            <Large />
            <LabelWhite />
            <Large />
            <Submit /> 
            {error && <Error size='small'><span>There is an error !</span></Error>}
        </StyledForm>
    )
}

/* Will show the right 'tag' within documentation */
Form.displayName = 'Form';
Form.defaultProps = {
    error: false,
    testid:"main-form"
};

Form.propTypes = {
 onSubmit: PropTypes.func.isRequired,
 label: PropTypes.string.isRequired,
 error: PropTypes.bool,
 testid: PropTypes.string
};

export default Form;