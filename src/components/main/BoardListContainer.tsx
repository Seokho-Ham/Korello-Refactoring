import React from 'react';
import styled from 'styled-components';
import BoardList from './BoardList';

const BoardListContainer = () => {
  return (
    <BoardListWrapper>
      <BoardListDiv>
        <BoardList />
      </BoardListDiv>
    </BoardListWrapper>
  );
};

export default BoardListContainer;

const BoardListWrapper = styled.div`
  width: 700px;
  height: 100%;
`;

const BoardListDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;
