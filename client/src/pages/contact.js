import React from "react";
import TemplateContact from '../components/templates/templateContact';
import ImgTel from '../assets/tel.png';

const Contact = () => {
  return (
    <TemplateContact
      img={ImgTel}
      title={'À votre \n écoute'}
      input1={'Si vous étiez une ville, vous seriez laquelle ?'}
      input2={'Quel monument rêveriez-vous de braquer ?'}
      input3={'Quel est votre domaine de prédilection en matière de braquage ?'}
      submitBtn={'Envoyer'}
    />
  )
}

export default Contact;