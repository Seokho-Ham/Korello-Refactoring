import React from 'react';
import styled from 'styled-components';
import CalendarButton from './sidebar/CalendarButton';
import LabelButton from './sidebar/LabelButton';

type ButtonSize = {
  width: string;
  height: string;
  margin: string;
};
const size: ButtonSize = { width: '10rem', height: '2.5rem', margin: '5px 0px' };

const ModalSidebar = () => {
  return (
    <Container>
      <LabelButton size={size} />
      <CalendarButton size={size} />
    </Container>
  );
};

export default ModalSidebar;

const Container = styled.div`
  width: 25%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
