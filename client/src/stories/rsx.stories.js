import React from 'react';
import Rsx from '../components/atoms/rsx';
import masque from '../assets/masque.png';
import yt from '../assets/yt.png';
import insta from '../assets/insta.png';

export const Site = () => <Rsx rs="site"> <img src={masque} width="100%" alt="site"/> </Rsx>;
export const Yt = () => <Rsx rs="yt"> <img src={yt} width="100%" alt="yt"/> </Rsx>;
export const Insta = () => <Rsx rs="insta"> <img src={insta} width="100%" alt="insta"/> </Rsx>;
