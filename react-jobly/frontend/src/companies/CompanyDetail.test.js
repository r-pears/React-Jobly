import React from 'react';
import { render } from '@testing-library/react';
import Company from './CompanyDetail';
import { MemoryRouter, Route } from 'react-router-dom';
import { UserProvider } from '../testUtils';

it('renders without crashing', () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <Company />
      </UserProvider>
    </MemoryRouter>
  );
});

it('matches snapshot', () => {
  const { asFragment } = render(
    <MemoryRouter initialEntries={['/company/ibm']}>
      <UserProvider>
        <Route path='/company/:handle'>
          <Company />
        </Route>
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
