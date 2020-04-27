import React from 'react';
import PageNumber from '../components/atoms/pageNumber';

export const Default = () => <PageNumber />;
export const Custom = () => <PageNumber currentPage="6" totalPage="8" />;

