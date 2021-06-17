import React from 'react';
import {render} from '@testing-library/react';
import FavoritesScreen from './favorites-screen';

describe('FavoritesScreen', () => {
  it('renders FavoritesScreen component', () => {
    render(<FavoritesScreen />);
  });
});
