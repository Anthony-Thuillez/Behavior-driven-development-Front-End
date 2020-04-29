import React from 'react';
import LinkNavigation from '../components/atoms/linkNavigation';
import { BrowserRouter as Router } from "react-router-dom";

export const Default = () => <Router><LinkNavigation testid="link-nav" /></Router>;
export const Active = () => <Router><LinkNavigation testid="link-nav-active" to="#" text="Active Link" /></Router>;
