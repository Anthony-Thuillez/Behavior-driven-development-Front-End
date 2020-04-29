import React from "react";
import TemplateContact from '../components/templates/templateContact';
import ImgTel from '../assets/tel.png';

const Contact = () => {

  const fields = {
    field1: {
      text: 'Si vous étiez une ville, vous seriez laquelle ?',
      required: true
    },
    field2: {
      text: 'Quel monument rêveriez-vous de braquer ?',
      required: true
    },
    field3: {
      text: 'Quel est votre domaine de prédilection en matière de braquage ?',
      required: true
    }
  }

  return (
    <TemplateContact
      img={ImgTel}
      title={'À votre \n écoute'}
      fields={fields}
      submitBtn={'Envoyer'}
    />
  )
}

export default Contact;