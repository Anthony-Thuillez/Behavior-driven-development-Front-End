import React from "react";
import TemplateAbout from '../components/templates/templateAbout';
import Img from '../assets/sergio.png';

export default function About() {
  return (
    <TemplateAbout
      backgroundImg={Img}
      title="Test de la page about"
    />
  )
}