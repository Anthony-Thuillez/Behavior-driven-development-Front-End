import React from 'react';
import Navigation from '../components/molecules/navigation';
import { BrowserRouter as Router } from "react-router-dom";

export const Default = () => <Router><Navigation testid="navigation-test" /></Router>;