import React from "react";
import TemplateContact from '../components/templates/templateContact';
import ImgTel from '../assets/tel.png';

const Contact = () => {
  return (
    <TemplateContact
      img={ImgTel}
      title={'À votre \n écoute'}
    />
  )
}

export default Contact;