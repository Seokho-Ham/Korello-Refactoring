import React from 'react';
import styled from 'styled-components';
import { GoChecklist } from 'react-icons/go';
import ChecklistItem from './ChecklistItem';
import ProgressBar from '../../cards/ProgressBar';
const Checklist = () => {
  return (
    <Container>
      <Title>
        <GoChecklist size='30' />
        <div>Checklist</div>
      </Title>
      <ProgressBar percent={60} />
      <List>
        <ChecklistItem id={1} title='항목 1' status={true} />
        <ChecklistItem id={2} title='항목 2' status={true} />
        <ChecklistItem id={3} title='항목 3' status={false} />
        <ChecklistItem id={4} title='항목 4' status={false} />
        <ChecklistItem id={5} title='항목 5' status={true} />
      </List>
    </Container>
  );
};

export default Checklist;

const Container = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.large};

  div {
    margin: 0px 5px;
    display: inline-block;
    position: relative;
    top: -6px;
  }
`;
const List = styled.div``;
