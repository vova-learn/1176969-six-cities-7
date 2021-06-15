import React from 'react';
import {render, screen} from '@testing-library/react';
import HotelCard from './hotel-card';

describe('HotelCard', () => {
  it('renders HotelCard component', () => {
    render(<HotelCard />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText(/Place image/i)).toBeInTheDocument();
    expect(screen.getByText(/night/i)).toBeInTheDocument();
  });
});
