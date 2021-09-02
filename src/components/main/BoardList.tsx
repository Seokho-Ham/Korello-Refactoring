import React, { MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { boardList } from '../../assets/data';
import Button from '../common/Button';
import AddBoardForm from './AddBoardForm';
import BoardItem from './BoardItem';
const BoardList = () => {
  return (
    <ListWrapper>
      <ListTitle>Personal Boards</ListTitle>
      <ListItems>
        {boardList.map(board => (
          <BoardItem key={board.id} id={board.id} title={board.title} />
        ))}
        <AddBoardForm />
      </ListItems>
    </ListWrapper>
  );
};

export default BoardList;

const ListWrapper = styled.div`
  margin: 20px 0px;
  max-width: 98%;
`;
const ListTitle = styled.div`
  font-size: ${({ theme }) => theme.font.large};
  font-weight: bold;
  height: 40px;
  margin: 20px 0px;
`;
const ListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
