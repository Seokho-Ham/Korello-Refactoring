import React from 'react';
import styled from 'styled-components';
import BoardItem from './BoardItem';
const BoardList = () => {
  return (
    <ListWrapper>
      <ListTitle>보드 종류</ListTitle>
      <ListItems>
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
      </ListItems>
    </ListWrapper>
  );
};

export default BoardList;

const ListWrapper = styled.div`
  margin: 5px 0px;
  border: 2px solid grey;
  max-width: 98%;
`;
const ListTitle = styled.div`
  height: 40px;
`;
const ListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
