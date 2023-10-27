import React, { useState, useContext } from 'react';
import { Button, Input, Flex, Checkbox } from 'antd';
import styled from 'styled-components';
import { JobContext } from '../JobsContext';

export const Job = styled.li`
  font-size: 20px;
`;

const All = () => {
  const [job, setJob] = useState('');
  const { jobs, addJob, toggleJob } = useContext(JobContext);

  const handleSubmit = () => {
    addJob({ description: job, completed: false });
    setJob('');
  };

  const handleCheckboxChange = (index) => {
    toggleJob(index);
  };

  return (
    <>
      <Flex gap="10px">
        <Input  style={{width:'229px'}} value={job} placeholder="Add details" onChange={(e) => setJob(e.target.value)} />
        <Button onClick={handleSubmit} type="primary" size="large">
          Add
        </Button>
      </Flex>
      {jobs.length > 0 && (
        <div style={{ width: '300px', textAlign: 'left' }}>
          {jobs.map((job,index) => {
            const listItemStyles = {
              textDecoration: job.completed ? 'line-through' : 'none',
            };
            return (
              <Job key={index} style={listItemStyles}>
                <Checkbox
                  style={{ marginRight: '10px' }}
                  checked={job.completed}
                  onChange={() => handleCheckboxChange(index)}
                />
                {job.description}
              </Job>
            );
          })}
        </div>
      )}
    </>
  );
};

export default All;