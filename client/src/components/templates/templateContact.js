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

    const [field, setField] = useState({});

    data.map((element, index) => {
        this.state.data.push({ indexNumber: index, show: false}] })
    });

    props && Object.keys(props.fields).map((items, i) => {
        let item = props.fields[items];
        setState
    })


    const [error, setError] = useState({});

    const handleValidation = () => {
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleValidation()
        // if (handleValidation()) {
        //     alert("Form submitted");
        // } else {
        //     alert("Form has errors.")
        // }
    };

    const handleChange = (id, e) => {
        // field[id] = e.target.value;
        // setField({ ...field, field: field[id]});
        // console.log(field)
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
                    // onSubmit={(e) => handleSubmit(e)}
                >
                    {
                        props && Object.keys(props.fields).map((items, i) => {
                            let item = props.fields[items];
                            return (
                                <FormField
                                    key={i}
                                    // error={error[items] === true ? true : false}
                                >
                                    <Label
                                        text={item.text}
                                        isRequired={item.required ? true : false}
                                    />
                                    <InputText
                                        onChange={(e) => handleChange(items, e)}
                                        // value={field[items]} 
                                        isRequired={item.required ? true : false}
                                    />
                                </FormField>
                            )
                        })
                    }
                    <Button
                        className="submitBtn"
                        text="Envoyer"
                        onClick={(e) => handleSubmit(e)}
                    />
                </StyledForm>
            </Wrapper>
        </Template>
      )
}

export default TemplateContact;