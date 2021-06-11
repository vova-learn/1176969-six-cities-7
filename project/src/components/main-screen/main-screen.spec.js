import React from 'react';
import {render, screen} from '@testing-library/react';
import MainScreen from './main-screen';

describe('MainScreen', () => {
  it('renders MainScreen component', () => {
    const placesCount = 312;
    render(<MainScreen placesCount={placesCount} />);
    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
    expect(screen.getByText(/paris/i)).toBeInTheDocument();
    expect(screen.getByText(/cologne/i)).toBeInTheDocument();
    expect(screen.getByText(/brussels/i)).toBeInTheDocument();
    expect(screen.getAllByText(/amsterdam/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/hamburg/i)).toBeInTheDocument();
    expect(screen.getByText(/dusseldorf/i)).toBeInTheDocument();
  });
});
