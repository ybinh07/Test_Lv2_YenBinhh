import React, { createContext, useState } from 'react';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  const addJob = (newJob) => {
    setJobs((prevJobs) => [...prevJobs, newJob]);
  };

  const toggleJob = (index) => {
    setJobs((prevJobs) => {
      const updatedJobs = [...prevJobs];
      updatedJobs[index].completed = !updatedJobs[index].completed;
      return updatedJobs;
    });
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, toggleJob }}>
      {children}
    </JobContext.Provider>
  );
};