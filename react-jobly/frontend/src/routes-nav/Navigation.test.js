import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';
import { UserProvider } from '../testUtils';

it('renders without crashing', () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <Navigation />
      </UserProvider>
    </MemoryRouter>
  );
});

it('matches snapshot', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider>
        <Navigation />
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it('matches snapshot when not signed in', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider currentUser={null}>
        <Navigation />
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
