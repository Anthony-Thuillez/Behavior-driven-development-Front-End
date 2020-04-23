import React from 'react';
import Enigma from '../components/molecules/enigma';

export const Passcode = props => <Enigma testid="main-form" onSubmit={props.onSubmit}></Enigma>;
