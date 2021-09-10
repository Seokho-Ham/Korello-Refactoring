import React from 'react';
import styled from 'styled-components';
import { GoChecklist } from 'react-icons/go';
import ChecklistItem from './ChecklistItem';
import ProgressBar from './ProgressBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducers';
import AddChecklistButton from './AddChecklistButton';

const caculateProgress = (
  todoList: {
    todoId: string;
    title: string;
    status: boolean;
  }[],
) => {
  const listLength = todoList.filter(el => el.status).length;
  const result = Math.round((listLength / todoList.length) * 100);
  return isNaN(result) ? 0 : result;
};

const Checklist = () => {
  const { currentCard } = useSelector((state: RootState) => state.boardReducer);
  return (
    <Container>
      <Title>
        <GoChecklist size='30' />
        <div>Checklist</div>
      </Title>
      <ProgressBar percent={caculateProgress(currentCard.todoList)} />
      <List>
        {currentCard.todoList.map(el => (
          <ChecklistItem key={el.todoId} id={el.todoId} title={el.title} status={el.status} />
        ))}
      </List>
      <AddChecklistButton />
    </Container>
  );
};

export default Checklist;

const Container = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  margin: 10px;
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
const List = styled.div`
  margin: 10px 0px;
`;
