//todo Fetch and render from JobTech --------------------------------------------------------------

// const urlWildcard= 'https://jobsearch.api.jobtechdev.se/search?q=muse*';
// const urlAdSearch= 'https://jobsearch.api.jobtechdev.se/search?q=Flen';
// const urlLogo = 'https://jobsearch.api.jobtechdev.se/ad/8430129/logo';
// const urlPhrase = 'https://jobsearch.api.jobtechdev.se/search?q=%22search%20for%20this%20phrase%22';
// const urlGeographicalArea = 'https://jobsearch.api.jobtechdev.se/search?q=Flen';
// const cleanEndpoint: string = 'https://jobsearch.api.jobtechdev.se/search?';

// Imports
import { useEffect, useState } from 'react';
import { getData } from './GetData';
import { SearchField } from '../pages/Home/SearchField';

// Endpoint and mumber of posts
const activeEndpoint = 'https://jobsearch.api.jobtechdev.se/search?';
const limit = 40; // Specify the number of results per page
const offset = 0; // Specify the starting point of the results (0-indexed)
const url = `${activeEndpoint}&limit=${limit}&offset=${offset}`;

// Interface ---------------------------
interface Job {
  id: string;
  employer: {
    name: string;
  };
  headline: string;
  workplace_address: {
    city: string;
  };
  logo_url?: string; // Optional
}

// Jobs -----------------------------------
export function Jobs(): JSX.Element {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const data: any = await getData(url);
        setJobs(data.hits as Job[]);
        console.log(data.hits[0].id);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value);
  };

  const filteredJobs = jobs.filter((job) => {
    return JSON.stringify(job).toLowerCase().match(searchFilter.toLowerCase()); //|| job.workplace_address.city.includes(searchFilter)
  });

  //! Render jobs (make a separate component?)
  const renderedJobs = filteredJobs.map((job: Job) => (
    <div key={job.id} className='job-card'>
      <div className='logo'>
        <img
          className='logo-image'
          src={job.logo_url ? job.logo_url : './public/images/JobChaser-SVG.svg '}
          alt=''
        />
      </div>
      <div className='company-info'>
        <h2>{job.employer.name}</h2>
        <p>Position: {job.headline}</p>
        <p>Location: {job.workplace_address.city}</p>
        <p>ID: {job.id}</p>
      </div>
      <div className='tag-btn-container'>
        <div className='tag-btn'>tag1</div>
        <div className='tag-btn'>tag2</div>
        <div className='tag-btn'>tag3</div>
      </div>
    </div>
  ));

  return (
    <>
      <SearchField onChange={handleChange} value={searchFilter} />
      <div>{filteredJobs.length}</div>
      <div className='card-wrapper'> {renderedJobs}</div>
    </>
  );
}
