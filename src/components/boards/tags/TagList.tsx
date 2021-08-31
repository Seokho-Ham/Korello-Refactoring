import React from 'react';
import styled from 'styled-components';
import TagItem from './TagItem';
import { tagList } from '../../../assets/data';
const BoardTagList = () => {
  return (
    <TagListContainer>
      {tagList.map(el => (
        <TagItem key={el.id} id={el.id} title={el.title} cards={el.cards} />
      ))}
    </TagListContainer>
  );
};

export default BoardTagList;

const TagListContainer = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  overflow-x: scroll;
  /* border: 1px solid red; */
`;
