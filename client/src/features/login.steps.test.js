import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

// Component entry
import App from '../App';

// Scenarios
const loginFeature = loadFeature('./src/features/login.feature');

defineFeature(loginFeature, test => {
  
  jest.useFakeTimers();

  test('User logging in', ({ given, when, then, and }) => {
    let getElement;
    let button;
    let username;
    let password;
    let content;

    beforeEach(() => {
      act(() => {
        const { getByTestId } = render(<App />);
        getElement = getByTestId;
      });
    });

    given(/^I am a user attempting to log into my favorite app$/, () => {
      button = getElement('login-button');
      expect(button.disabled).toBe(true);
    });

    when(/^I type ("([^\\"]|\\")*") as username$/, usernameValue => {
      username = getElement('username-field');
      fireEvent.change(username, {target : {value : usernameValue}});
    });

    then(/^loggin button should still be disabled$/, () => {
      expect(button.disabled).toBe(true);
    });

    when(/^I type ("([^\\"]|\\")*") as password$/, passwordValue => {
      password = getElement('password-field');
      fireEvent.change(password, {target : {value : passwordValue}})
    });

    then(/^loggin button should be enabled$/, () => {
      expect(button.disabled).toBe(false);
    });

    when(/^I click on loggin button$/, () => {
      button.click();
    });

    then(/^username field should be disabled$/, () => {
      expect(username.disabled).toBe(true);
    });

    and(/^password field should be disabled$/, () => {
      expect(password.disabled).toBe(true);
    });

    and(/^loggin button should be disabled$/, () => {
      expect(button.disabled).toBe(true);
    });

    and(/^content should display ("([^\\"]|\\")*")$/, text => {
      act(() => {
        // jest.runOnlyPendingTimers();
        jest.advanceTimersByTime(4000);
      });
      content = getElement('dashboard');
      expect(content).toHaveTextContent(text);
    });
  });
});
