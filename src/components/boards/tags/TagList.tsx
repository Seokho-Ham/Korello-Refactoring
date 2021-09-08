import React from 'react';
import styled from 'styled-components';
import TagItem from './TagItem';
// import { tagList } from '../../../assets/data';
import { Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
const BoardTagList = () => {
  const { tagList, cardList } = useSelector((state: RootState) => state.boardReducer);
  return (
    <Droppable droppableId='tag-list' direction='horizontal' type='tag'>
      {provided => (
        <TagListContainer ref={provided.innerRef} {...provided.droppableProps}>
          {tagList.length > 0
            ? tagList.map((el, index) => (
                <TagItem key={index} index={index} title={el.name} cards={cardList[el.name]} />
              ))
            : '보드가 비어있습니다  '}
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
