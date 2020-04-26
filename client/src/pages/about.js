import React from "react";
import TemplateAbout from '../components/templates/templateAbout';
import Img from '../assets/sergio.png';

const About = () => {
  return (
    <TemplateAbout
      backgroundImg={Img}
      title="Sergio"
      titleMirror="Le professeur"
      text1={'Je suis Sergio Marquina. \n Dans mon enfance, j’ai grandi dans un lit d’hôpital, en écoutant les innombrables anecdotes de mon père. Il est devenu une inspiration pour moi. C’est ce qui me permet d’approfondir mes réflexions pour l’élaboration de mes projets.'}
      text2={'J’ai des connaissances dans divers domaines : je parle russe, je m’intéresse à l’anatomie, et j’ai quelques bases en arts martiaux. \n Pour me divertir, il m’arrive de réaliser des origamis. J’ai également tout un intérêt pour la musique, j’aime jouer du piano et écouter des disques vinyles.'}
    />
  )
}

export default About;