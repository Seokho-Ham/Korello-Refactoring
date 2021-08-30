import React from 'react';
import styled from 'styled-components';
import { boardList } from '../../assets/data';
import BoardItem from './BoardItem';
const BoardList = () => {
  return (
    <ListWrapper>
      <ListTitle>보드 종류</ListTitle>
      <ListItems>
        {boardList.map(board => (
          <BoardItem id={board.id} title={board.title} />
        ))}
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
  font-size: 18px;
  font-weight: bold;
  height: 40px;
`;
const ListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
