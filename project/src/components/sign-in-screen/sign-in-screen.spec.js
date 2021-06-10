import React from 'react';
import {getByText, render, screen} from '@testing-library/react';
import SignInScreen from './sign-in-screen';

describe('SignInScreen', () => {
  it('renders SignInScreen component', () => {
    render(<SignInScreen />);
    expect(screen.getAllByText(/sign in/i)[0]).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(getByText(document.querySelector('button[type="submit"]'), /sign in/i)).toBeInTheDocument();
  });
});
