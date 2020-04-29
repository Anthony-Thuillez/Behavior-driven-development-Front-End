import React from 'react';
import FormField from '../components/molecules/formField';

export const Default = () => <FormField testid="form-field-test" />;
export const Error = () => <FormField testid="form-field-error-test" error={true} />;
