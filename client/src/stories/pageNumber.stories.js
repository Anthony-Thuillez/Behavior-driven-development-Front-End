import React from 'react';
import PageNumber from '../components/atoms/pageNumber';

export const Default = () => <PageNumber testid="page-number-int" />;
export const Custom = () => <PageNumber testid="page-number-text" currentPage={6} totalPage={8} />;

