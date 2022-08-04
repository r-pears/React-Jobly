import React, { useState, useEffect } from 'react';
import SearchForm from '../common/SearchForm';
import JoblyAPI from '../api/api';
import CompanyCard from './CompanyCard';
import LoadingSpinner from '../common/LoadingSpinner';

/** Show page with list of companies.
 * 
 * On mount, loads companies from API.
 * Re-loads filtered companies on submit from search form.
 * 
 * This is routed to at /companies.
 * 
 * Routes -> { CompanyCard, SearchForm }
 */
const CompanyList = () => {
  console.debug('CompanyList');

  const [companies, setCompanies] = useState(null);

  useEffect(function getComapniesOnMount() {
    console.debug('CompanyList useEffect getCompaniesOnMount');
    SearchForm();
  }, []);

  // Triggered by search form submit; reloads companies.
  async function search(name) {
    let companies = await JoblyAPI.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) return <LoadingSpinner />;

  return (
    <div className='CompanyList col-md-8 offset-md-2'>
      <SearchForm searchFor={search} />
      {companies.length ?
        (
          <div className='CompanyList-list'>
            {companies.map(company => (
              <CompanyCard
                key={company.handle}
                handle={company.handle}
                name={company.name}
                description={company.description}
                logoUrl={company.logoUrl}
              />
            ))}
          </div>
        )
        : (
          <div className='lead'>
            Sorry, no results were found.
          </div>
        )
      }
    </div>
  );
}

export default CompanyList;
