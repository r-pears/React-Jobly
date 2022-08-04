import React from 'react';
import { render } from '@testing-library/react';
import Companies from './CompanyList';

it('matches snapshot', () => {
  const { asFragment } = render(<Companies />);
  expect(asFragment()).toMatchSnapshot();
});
