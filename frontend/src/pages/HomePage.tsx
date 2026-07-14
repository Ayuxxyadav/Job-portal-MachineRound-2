import React, { useEffect, useState } from 'react'
import axios from 'axios';
export const HomePage = () => {
   const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  // Page load hote hi saara data fetch karo
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    const res = await axios.get(`http://localhost:9000/jobs?search=${search}`);
     
    setJobs(res.data);
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchJobs(); // search button dabate hi backend ko naye query ke saath call karo
  };

  return (
    <div className='bg-amber-200 px-90'>
      <h1>Remote Jobs</h1>

      <form onSubmit={handleSearch}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by job title..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {jobs.map(job => (
        <div key={job.id} style={{ border: '1px solid #ddd', padding: 12, margin: '10px 0' }}>
          <img src={job.logo} alt={job.company} width={40} />
          <h3>{job.title}</h3>
          <p>{job.company} — {job.location}</p>
          <p>{job.type}</p>
          <a href={job.url} target="_blank" rel="noreferrer">View Job</a>
        </div>
      ))} 
    </div>
  )
}
