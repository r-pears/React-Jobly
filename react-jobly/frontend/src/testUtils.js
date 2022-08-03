import React from 'react';
import UserContext from './auth/UserContext';

const demoUser = {
  username: 'testuser',
  first_name: 'testfirst',
  last_name: 'testlast',
  email: 'test@test.com',
  photo_url: null,
};

const UserProvider = ({ children, currentUser = demoUser, hasAppliedToJob = () => false }) => (
  <UserContext.Provider value={{ currentUser, hasAppliedToJob }}>
    {children}
  </UserContext.Provider>
);

export { UserProvider };
