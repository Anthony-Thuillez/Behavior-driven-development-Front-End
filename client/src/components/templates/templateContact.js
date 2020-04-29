import React, { useState } from 'react';
import Wrapper from '../atoms/wrapper';
import Background from '../atoms/background';
import Title from '../atoms/title';
import { Color } from '../../styles/variables';
import Label from '../atoms/label';
import InputText from '../atoms/inputText';
import Button from '../atoms/button';
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
    .submitBtn {
        margin-top: 40px;
        margin-left: auto;
        display: flex;
    }
`;

const TemplateContact = (props) => {

    const [field, setField] = useState(props.fields);

    const handleValidation = () => {
        let formIsValid = true;

        for (let i = 0; i < field.length; i++) {
            if (field[i].value.length <= 0) {
                field[i].error = true;
                setField([...field]);
                formIsValid = false;
            } else {
                field[i].error = false;
                setField([...field]);
                formIsValid = true;
            }
        }

        return (
            formIsValid
        )
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(handleValidation())
        if (handleValidation()) {
            alert("Form submitted");
        } else {
            alert("Form has errors.")
        }
    };

    const handleChange = (index, e) => {
        field[index].value = e.target.value;
        setField([...field])
    };
    
    return (
        <Template>
            <Wrapper>
                <Background
                    img={props.img}
                    imgWidth="1160px"
                />
                <Title text={props.title} size="medium" color={Color.whiteTranslucid} />
                <StyledForm
                    onSubmit={(e) => handleSubmit(e)}
                >
                    {
                        props && props.fields.map((item, i) => {
                            return (
                                <FormField
                                    key={i}
                                    error={item.error}
                                >
                                    <Label
                                        text={item.label}
                                        isRequired={item.required ? true : false}
                                    />
                                    <InputText
                                        onChange={(e) => handleChange(i, e)}
                                        value={item.value} 
                                        isRequired={item.required ? true : false}
                                    />
                                </FormField>
                            )
                        })
                    }
                    <Button
                        className="submitBtn"
                        text="Envoyer"
                        // onClick={(e) => handleSubmit(e)}
                    />
                </StyledForm>
            </Wrapper>
        </Template>
      )
}

export default TemplateContact;