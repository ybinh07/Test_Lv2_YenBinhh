
import React, { useContext } from 'react';
import {Checkbox,Flex } from 'antd';
import { JobContext } from '../JobsContext';
import {CiTrash} from 'react-icons/ci';
const Complete = () => {
    const { jobs, toggleJob } = useContext(JobContext);

    const handleCheckboxChange = (index) => {
      toggleJob(index);
    };


    return (
      <div style={{ width: '300px', textAlign: 'left' }}>
        {jobs
          .filter((job) => job.completed)
          .map((job, index) => {
            const listItemStyles = {
              textDecoration: job.completed ? 'line-through' : 'none',
              fontSize: '20px'
            };
            return (
                <Flex justify='space-between'>
              <div key={index} style={listItemStyles}>
                <Checkbox
                  style={{ marginRight: '10px' }}
                  checked={job.completed}
                  onChange={() => handleCheckboxChange(index)}
                />
                {job.description}
              </div>
              <div style={{cursor:'pointer'}}><CiTrash/></div>
              </Flex>
            );
          })}
      </div>
  )
}

export default Complete