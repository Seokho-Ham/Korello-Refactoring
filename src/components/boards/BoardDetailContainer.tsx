import React from 'react';
import styled from 'styled-components';
import BoardButtons from './BoardButtons';
import TagList from './tags/TagList';
const BoardDetailContainer = () => {
  return (
    <BoardContainer>
      <BoardButtons />
      <TagList />
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
