import React from "react";
import TemplateContact from '../components/templates/templateContact';
import ImgTel from '../assets/tel.png';

const Contact = () => {

  const fields = [
    {
      label: 'Si vous étiez une ville, vous seriez laquelle ?',
      required: true,
      value: '',
      error: false,
      datatestid: "city-field"
    },
    {
      label: 'Quel monument rêveriez-vous de braquer ?',
      required: true,
      value: '',
      error: false,
      datatestid: "rob-field"
    },
    {
      label: 'Quel est votre domaine de prédilection en matière de braquage ?',
      required: true,
      value: '',
      error: false,
      datatestid: "chosen-field"
    }
  ]

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