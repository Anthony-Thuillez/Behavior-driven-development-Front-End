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
    margin-top: 72px;
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
                        <FormField error={true} >
                            <Label text="Si vous étiez une ville, vous seriez laquelle ?" isRequired />
                            <InputText />
                        </FormField>
                        <FormField error={true} >
                            <Label text="Si vous étiez une ville, vous seriez laquelle ?" isRequired />
                            <InputText />
                        </FormField>
                        <FormField>
                            <Label text="Si vous étiez une ville, vous seriez laquelle ?" isRequired />
                            <InputText />
                        </FormField>
                    </StyledForm>

                </Wrapper>
            </Template>
        </>
      )
}

export default TemplateContact;