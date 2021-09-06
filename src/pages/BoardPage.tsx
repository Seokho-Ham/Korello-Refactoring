import React from 'react';
import styled from 'styled-components';
import BoardButtons from '../components/boards/BoardButtons';
import BoardDetailContainer from '../components/boards/BoardDetailContainer';
const BoardPage = () => {
  return (
    <BoardWrapper>
      <BoardButtons />
      <BoardDetailContainer />
    </BoardWrapper>
  );
};

export default BoardPage;

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
