import React from 'react';
import { render } from '@testing-library/react';
import { UserProvider } from '../testUtils';
import JobCard from './JobCard';

it('matches snapshot', () => {
  let item = { title: 'CEO', salary: 1000000, equity: 100 };
  const { asFragment } = render(
    <UserProvider>
      <JobCard item={item} />
    </UserProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
