import React from 'react';
import styled from 'styled-components';
import Activity from './activity/Activity';
import Checklist from './checklist/Checklist';

const ModalMain = () => {
  return (
    <Container>
      <Checklist />
      <Activity />
    </Container>
  );
};

export default ModalMain;

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
