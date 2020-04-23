import React from 'react';
import Enigma from '../components/molecules/enigma';

export const Passcode = props => <Enigma testid="enigma" onSubmit={props.onSubmit}></Enigma>;
