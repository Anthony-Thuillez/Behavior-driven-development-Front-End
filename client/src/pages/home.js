import React from "react";
import TemplateHomepage from '../components/templates/templateHomepage';
import Img from '../assets/professeur.png';

export default function Home() {
  return (
    <TemplateHomepage
      backgroundImg={Img}
      title="Test de la homepage"
    />
  )
}