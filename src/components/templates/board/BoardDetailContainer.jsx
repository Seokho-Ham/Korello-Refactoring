import React from 'react';
import styled from 'styled-components';
import BoardButtons from '../../organics/board/BoardButtons';
import BoardTagList from '../../organics/board/BoardTagList';
const BoardDetailContainer = () => {
  return (
    <BoardContainer>
      <BoardButtons />
      <BoardTagList />
    </BoardContainer>
  );
};

export default BoardDetailContainer;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
`;
