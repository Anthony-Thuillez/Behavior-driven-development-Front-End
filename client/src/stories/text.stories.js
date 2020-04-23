import React from 'react';
import Text from '../components/atoms/text';

export const Regular = () => <Text testid="regular-text"><span>Regular Text</span></Text>;
export const Bold= () => <Text weight='bold' testid="bold-text"><span>Bold Text</span></Text>;
export const RegularRed= () => <Text weight='regularRed' color='red' testid="red-text"><span>Regular Red Text</span></Text>;
