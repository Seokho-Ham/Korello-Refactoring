import React from 'react';
import styled from 'styled-components';
import BoardList from '../../organics/main/BoardList';

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
  border: 1px solid;
`;

const BoardListDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;
