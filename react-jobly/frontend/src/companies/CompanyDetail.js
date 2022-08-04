import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobyAPI from '../api/api';
import JobCardList from '../jobs/JobCardList';
import LoadingSpinner from '../common/LoadingSpinner';

/** Company Detail page.
 * 
 * Render information about company, along with the jobs at that company.
 * 
 * Routed at /companies/:handle
 * 
 * Routes -> CompanyDetail -> JobCardList
 */
const CompanyDetail = () => {
  const { handle } = useParams();
  console.debug('CompanyDetail', 'handle=', handle);

  const [company, setCompany] = useState(null);

  useEffect(function getCompanyAndJobsForUser() {
    async function getCompany() {
      setCompany(await JobyAPI.getCompany(handle));
    }

    getCompany();
  }, [handle]);

  if (!company) return <LoadingSpinner />;

  return (
    <div className='CompanyDetail col-md-8 offset-md-2'>
      <h3>{company.name}</h3>
      <div>{company.description}</div>
      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
