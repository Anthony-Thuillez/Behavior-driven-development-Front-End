import React from "react";
import TemplateProjects from '../components/templates/templateProjects';
import ImgFabriqueDeLaMonnaie from '../assets/fabriqueDeLaMonnaie.png';

const Projects = () => {
  return (
    <TemplateProjects
      title={'La Fabrique \n de la Monnaie'}
      text1={'Les histoires que racontait mon père lorsque j’étais enfant, m’ont poussé à cette élaboration minutieuse.'}
      team={'Notre team : ' + 'J’ai recruté les meilleurs malfaiteurs du pays... ceux qui n’ont rien à perdre. Je vous prie de les nommer ainsi : Tokyo, Nairobi, Río, Moscou, Berlin, Denver, Helsinki et Oslo. Je les ai formé durant 5 mois à Tolède.'}
      objectif={'Notre objectif : ' + 'Infiltrer la Fabrique nationale de la monnaie et du timbre afin d’imprimer 2,4 milliards d’euros, en moins de onze jours et sans verser une goutte de sang.'}
      img={ImgFabriqueDeLaMonnaie}
      digitData1={'2 400 000 000'}
      nameData1={'d\'euros'}
      digitData2={'11'}
      nameData2={'jours'}
      digitData3={'67'}
      nameData3={'otages'}
    />
  );
};

export default Projects;