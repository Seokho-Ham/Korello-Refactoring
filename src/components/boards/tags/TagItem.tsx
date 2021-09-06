import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { Card } from '../../../assets/data';
import CardList from '../cards/CardList';

interface TagItemProps {
  id: number;
  title: string;
  index: number;
  cards: Card[];
}

const TagItem = ({ id, index, title, cards }: TagItemProps) => {
  return (
    <Draggable key={id} draggableId={title} index={index}>
      {provided => (
        <TagItemContainer ref={provided.innerRef} {...provided.draggableProps}>
          <TagTitle {...provided.dragHandleProps}>{title}</TagTitle>
          <CardList id={id} tagTitle={title} cards={cards} />
        </TagItemContainer>
      )}
    </Draggable>
  );
};

export default TagItem;

const TagItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  min-width: 300px;
  height: fit-content;
  max-height: 90%;
  margin: 10px;
  padding: 5px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.color.grey2};
`;

const TagTitle = styled.div`
  height: 50px;
  margin: 5px;
  font-size: ${({ theme }) => theme.font.medium};
`;
