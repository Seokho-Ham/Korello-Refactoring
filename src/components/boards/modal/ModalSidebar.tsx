import React, { useState } from 'react';
import styled from 'styled-components';
import CalendarButton from './sidebar/CalendarButton';
import LabelContainer from './sidebar/label/LabelContainer';

type ButtonSize = {
  width: string;
  height: string;
  margin: string;
};
const size: ButtonSize = { width: '10rem', height: '2.5rem', margin: '5px 0px' };

const ModalSidebar = () => {
  const [openedState, setOpenedState] = useState('');
  const viewHandler = (name: string = '') => {
    setOpenedState(name);
  };
  return (
    <Container>
      <LabelContainer size={size} openedState={openedState} viewHandler={viewHandler} />
      <CalendarButton size={size} openedState={openedState} viewHandler={viewHandler} />
    </Container>
  );
};

export default ModalSidebar;

const Container = styled.div`
  width: 30%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
