import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../auth/UserContext';
import './Homepage.css';

/** Homepage of site.
 * 
 * Shows a welcome message or login/register buttons.
 * 
 * Routed at /.
 * 
 * Routes -> Homepage
 */
const Homepage = () => {
  const { currentUser } = useContext(UserContext);
  console.debug('Homepage', 'currentUser=', currentUser);

  return (
    <div className='Homepage'>
      <div className='container text-center'>
        <h1 className='mb-4 font-weight-bold'>Jobly</h1>
        <div className='lead'>All the jobs in one, convenient place.</div>
        {currentUser ?
          <h2>Welcome back, {currentUser.firstName || currentUser.username}!</h2>
          :
          <div>
            <Link className='btn btn-primary font-weight-bold mr-3' to='/login'>
              Login
            </Link>
            <Link className='btn btn-primary font-weight-bold' to='/signup'>
              Sign up
            </Link>
          </div>
        }
      </div>
    </div>
  );
}

export default Homepage;
