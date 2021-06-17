import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundScreen from './not-found-screen';

describe('NotFoundScreen', () => {
  it('renders NotFoundScreen component', () => {
    render(<NotFoundScreen />);

    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Go back to the main page/i)).toBeInTheDocument();
  });
});
