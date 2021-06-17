import React from 'react';
import { render } from '@testing-library/react';
import RoomScreen from './room-screen';

describe('RoomScreen', () => {
  it('correctly renders RoomScreen component', () => {
    render(<RoomScreen />);
  });
});
