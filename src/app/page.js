'use client'
import JobList from '../components/JobList';
import JobDetails from '../components/JobDetails';
import SearchBar from '../components/SearchBar';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async (location = '') => {
    try {
      const url = location 
        ? `${process.env.NEXT_PUBLIC_APP_URL}/api/jobs/search?location=${location}`
        : `${process.env.NEXT_PUBLIC_APP_URL}/api/jobs`;
  
      console.log('Fetching from:', url); // Debug the constructed URL
  
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleSearch = (location) => {
    setSearchLocation(location);
    fetchJobs(location);
  };

  return (
    <div className="flex h-screen">
  <div className="w-1/3 border-r overflow-y-auto">
    <SearchBar onSearch={handleSearch} />
    <JobList jobs={jobs} onJobSelect={setSelectedJob} />
  </div>
  <div className="w-2/3 overflow-y-auto">
    <JobDetails job={selectedJob} />
  </div>
</div>

  );
}