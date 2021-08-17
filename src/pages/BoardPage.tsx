import React from 'react';
import styled from 'styled-components';
import BoardDetailContainer from '../components/boards/BoardDetailContainer';
const BoardPage = () => {
  return (
    <BoardDiv>
      <BoardDetailContainer />
    </BoardDiv>
  );
};

export default BoardPage;

const BoardDiv = styled.div`
  width: 100%;
  height: 100%;
`;
