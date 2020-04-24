import React from 'react';
import Logo from '../components/atoms/logo';
import LogoImg from '../assets/logo.png';
import { BrowserRouter as Router } from "react-router-dom";

export const DisplayLogo = () => <Router><Logo testid="logo-div" src={LogoImg} /></Router>;