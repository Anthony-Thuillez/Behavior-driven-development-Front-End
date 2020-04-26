import React from "react";
import TemplateAbout from '../components/templates/templateAbout';
import ImgSergio from '../assets/sergio.png';
import ImgMasque from '../assets/masque.png';

const data = {
  sergio: {
    img: `${ImgSergio}`,
    title: "Sergio",
    titleMirror: "Le professeur",
    text1: "Je suis Sergio Marquina. \n Dans mon enfance, j’ai grandi dans un lit d’hôpital, en écoutant les innombrables anecdotes de mon père. Il est devenu une inspiration pour moi. C’est ce qui me permet d’approfondir mes réflexions pour l’élaboration de mes projets.",
    text2: "J’ai des connaissances dans divers domaines : je parle russe, je m’intéresse à l’anatomie, et j’ai quelques bases en arts martiaux. \n Pour me divertir, il m’arrive de réaliser des origamis. J’ai également tout un intérêt pour la musique, j’aime jouer du piano et écouter des disques vinyles."
  },
  professor: {
    img: `${ImgMasque}`,
    title: "Le professeur",
    titleMirror: "Sergio",
    text1: "J’ai préparé, planifié et peaufiné pendant des années cette opération, jusqu’au moindre détail, ne laissant que peu de place aux imprévus.",
    text2: "Je prends place dans un hangar humide, près de la Fabrique. Je suis le seul de l’équipe à rester en dehors du lieu de casse mais je reste disponible chaque seconde pour aiguiller mes précieux accolytes afin de mener à bien le plan."
  }
};

const About = () => <TemplateAbout data={data} />;

export default About;