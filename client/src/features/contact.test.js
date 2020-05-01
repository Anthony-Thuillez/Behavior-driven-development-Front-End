import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

// Component entry
import Contact from '../components/templates/templateContact';

// Scenarios
const contactFeature = loadFeature('./src/features/contact.feature');

defineFeature(contactFeature, test => {
    test('User contact in', ({ given, when, then, and }) => {
        let getElement;
        let button;
        let city;
        let rob;
        let field;

        const fields = [
            {
                label: 'Si vous étiez une ville, vous seriez laquelle ?',
                required: true,
                value: '',
                error: false,
                datatestid: "city-field"
            },
            {
                label: 'Quel monument rêveriez-vous de braquer ?',
                required: true,
                value: '',
                error: false,
                datatestid: "rob-field"
            },
            {
                label: 'Quel est votre domaine de prédilection en matière de braquage ?',
                required: true,
                value: '',
                error: false,
                datatestid: "chosen-field"
            }
        ]

        jest.useFakeTimers();

        beforeEach(() => {
            const { getByTestId } = render(<Contact fields={fields} />);
            getElement = getByTestId;
        });

        given(/^I am a user trying to contact El Professor$/, () => {
            button = getElement('button-contact');
            expect(button.disabled).toBe(true);
        });

        when(/^I type ("([^\\"]|\\")*") as username$/, cityValue => {
            city = getElement('city-field');
            fireEvent.change(city, { target: { value: cityValue } });
        });

        when(/^I type ("([^\\"]|\\")*") as what i want to rob$/, robValue => {
            rob = getElement('rob-field');
            fireEvent.change(rob, { target: { value: robValue } })
        });

        when(/^I type ("([^\\"]|\\")*") as what i want to rob$/, fieldValue => {
            field = getElement('rob-field');
            fireEvent.change(field, { target: { value: fieldValue } })
        });

        then(/^contact button should be enabled$/, () => {
            expect(button.disabled).toBe(false);
        });

        when(/^I click on contact button$/, () => {
            button.click();
        });

        and(/^content should display Thank you !$/, (test) => {
            jest.runOnlyPendingTimers()
            content = getElement("dashboard")
            expect(button.disabled).toBe(true);
        });
    });
});
