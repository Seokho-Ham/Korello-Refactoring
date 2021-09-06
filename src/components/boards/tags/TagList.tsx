import React from 'react';
import styled from 'styled-components';
import TagItem from './TagItem';
import { tagList } from '../../../assets/data';
import { Droppable } from 'react-beautiful-dnd';
const BoardTagList = () => {
  return (
    <Droppable droppableId='tag-list' direction='horizontal' type='tag'>
      {provided => (
        <TagListContainer ref={provided.innerRef} {...provided.droppableProps}>
          {tagList.map((el, index) => (
            <TagItem key={el.id} index={index} id={el.id} title={el.title} cards={el.cards} />
          ))}
          {provided.placeholder}
        </TagListContainer>
      )}
    </Droppable>
  );
};

export default BoardTagList;

const TagListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: scroll;
`;
