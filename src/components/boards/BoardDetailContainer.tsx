import React from 'react';
import styled from 'styled-components';
import TagList from './tags/TagList';
const BoardDetailContainer = () => {
  return (
    <BoardContainer>
      <TagList />
    </BoardContainer>
  );
};

export default BoardDetailContainer;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
