import React from 'react';
import { render } from '@testing-library/react';
import { UserProvider } from '../testUtils';
import JobCardList from './JobCardList';

it('matches snapshot', () => {
  const { asFragment } = render(
    <UserProvider>
      <JobCardList/>
    </UserProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
