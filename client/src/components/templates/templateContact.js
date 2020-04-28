import React from 'react';
import Wrapper from '../atoms/wrapper';
import Background from '../atoms/background';
import Title from '../atoms/title';
import { Color } from '../../styles/variables';
import Label from '../atoms/label';
import InputText from '../atoms/inputText';
import FormField from '../molecules/formField';
import Form from '../organisms/form';
import styled from 'styled-components';

const Template = styled.div`
    padding-top: 100px;
    @media screen and (max-height: 899px) {
        padding-top: 80px;
    }
`;

const StyledForm = styled(Form)`
    margin-top: 65px;
    max-width: 391px;
`;

const TemplateContact = (props) => {

    return (
        <>
            <Template>
                <Wrapper>
                    <Background
                        img={props.img}
                        imgWidth="1160px"
                    />
                    <Title text={props.title} size="medium" color={Color.whiteTranslucid} />

                    <StyledForm>
                        <FormField>
                            <Label text={props.input1} isRequired />
                            <InputText />
                        </FormField>
                        <FormField>
                            <Label text={props.input2} isRequired />
                            <InputText />
                        </FormField>
                        <FormField>
                            <Label text={props.input3} isRequired />
                            <InputText />
                        </FormField>
                    </StyledForm>

                </Wrapper>
            </Template>
        </>
      )
}

export default TemplateContact;