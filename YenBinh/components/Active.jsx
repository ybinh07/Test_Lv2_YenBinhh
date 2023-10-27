import React, { useContext, useState } from 'react';
import { Button, Input, Checkbox } from 'antd';
import { JobContext } from '../JobsContext';

const Active = () => {
  const { jobs, addJob, toggleJob } = useContext(JobContext);
  const [job, setJob] = useState('');

  const handleSubmit = () => {
    addJob({ description: job, completed: false });
    setJob('');
  };

//   const handleCheckboxChange = (index) => {
//     toggleJob(index);
//   };

  return (
    <div style={{ width: '300px', textAlign: 'left' }}>
      <div style={{ marginBottom: '10px' }}>
        <Input
          style={{ width: '229px', height: '40px', marginRight: '10px' }}
          placeholder="Add details"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <Button onClick={handleSubmit} type="primary" size="large">
          Add
        </Button>
      </div>
      {jobs
        .filter((job) => !job.completed)
        .map((job, index) => {
          const listItemStyles = {
            textDecoration: job.completed ? 'line-through' : 'none',
            fontSize: '20px'
          };
          return (
            <div key={index} style={listItemStyles}>
              <Checkbox
                style={{ marginRight: '10px' }}
                checked={job.completed}
                onChange={() =>toggleJob(index)}
              />
              {job.description}
            </div>
          );
        })}
    </div>
  );
};

export default Active;