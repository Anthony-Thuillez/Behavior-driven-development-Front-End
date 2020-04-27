import React from "react";
import TemplateHomepage from '../components/templates/templateHomepage';
import Img from '../assets/professeur.png';

const Home = () => {
  return (
    <TemplateHomepage
      backgroundImg={Img}
      title="Le professeur"
      titleMirror="Le professeur"
    />
  )
}

export default Home;