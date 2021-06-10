import React from 'react';
import {getByText, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignInScreen from './sign-in-screen';

describe('SignInScreen', () => {
  it('renders SignInScreen component', () => {
    render(<SignInScreen />);
    expect(screen.getAllByText(/sign in/i)[0]).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText(/email/i), 'e-mail@example.com');
    userEvent.type(screen.getByPlaceholderText(/password/i), '123456');

    expect(screen.getByDisplayValue(/e-mail@example.com/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(getByText(document.querySelector('button[type="submit"]'), /sign in/i)).toBeInTheDocument();
  });
});
