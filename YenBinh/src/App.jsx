import React from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';
import { JobProvider } from '../JobsContext';
import All from '../components/All';
import Active from '../components/Active';
import Complete from '../components/Complete';

const { TabPane } = Tabs;

const Title = styled.p`
  color: black;
  font-size: 40px;
  font-weight: bold;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const App = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const tabs = [
    {
      key: '1',
      label: 'All',
      content: <All />,
    },
    {
      key: '2',
      label: 'Active',
      content: <Active />,
    },
    {
      key: '3',
      label: 'Completed',
      content: <Complete/>,
    },
  ];

  return (
    <>
    <div style={{marginLeft:'650px', marginBottom:'200px'}}>
      <JobProvider>
        <Title>#Todo</Title>
        <Tabs size='large' style={{width:'500px'}} defaultActiveKey="1" onChange={onChange} items={tabs}/>
      </JobProvider>
      </div>
    </>

  );
};

export default App;