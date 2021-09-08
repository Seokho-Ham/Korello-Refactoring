import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../reducers';

import AddBoardForm from './AddBoardForm';
import BoardItem from './BoardItem';
const BoardList = () => {
  const { boardList } = useSelector((state: RootState) => state.mainReducer);

  return (
    <ListWrapper>
      <ListTitle>Personal Boards</ListTitle>
      <ListItems>
        {boardList.map(board => (
          <BoardItem key={board.id} id={board.id} name={board.name} />
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px;
`;
const ListTitle = styled.div`
  font-size: ${({ theme }) => theme.font.large};
  font-weight: bold;
  height: 40px;
  margin: 20px 8px;
`;
const ListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
