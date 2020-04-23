import React from 'react';
import PageNumber from '../components/atoms/pageNumber';

export const Number = () => <PageNumber type="number" testid="page-number-int"><span>1/2</span></PageNumber>;
export const Text = () => <PageNumber type="text" testid="page-number-text"><span>SCROLL</span></PageNumber>;

