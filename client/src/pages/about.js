import React from "react";
import TemplateAbout from '../components/templates/templateAbout';
import Img from '../assets/sergio.png';

const About = () => {
  return (
    <TemplateAbout
      backgroundImg={Img}
      title="Le professeur"
      titleMirror="Sergio"
    />
  )
}

export default About;