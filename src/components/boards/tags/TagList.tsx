import React from 'react';
import styled from 'styled-components';
import TagItem from './TagItem';

const BoardTagList = () => {
  return (
    <TagListContainer>
      <TagItem />
      <TagItem />
      <TagItem />
      <TagItem />
      <TagItem />
      <TagItem />
      <TagItem />
    </TagListContainer>
  );
};

export default BoardTagList;

const TagListContainer = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  overflow-x: scroll;
  border: 1px solid red;
`;
