import React from 'react';
import styled from 'styled-components';
import TagItem from './TagItem';
// import { tagList } from '../../../assets/data';
import { Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import AddTagForm from './AddTagForm';
const BoardTagList = () => {
  const { tagList, cardList } = useSelector((state: RootState) => state.boardReducer);
  return (
    <Droppable droppableId='tag-list' direction='horizontal' type='tag'>
      {provided => (
        <TagListContainer ref={provided.innerRef} {...provided.droppableProps}>
          {tagList.length > 0
            ? tagList
                .sort((a, b) => a.order - b.order)
                .map((el, index) => (
                  <TagItem
                    key={index}
                    index={index}
                    title={el.name}
                    cards={Object.keys(cardList) ? cardList[el.name] : null}
                  />
                ))
            : null}
          {provided.placeholder}
          <AddTagForm />
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
