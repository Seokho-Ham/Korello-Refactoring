import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { Card } from '../../../assets/data';
import { CardItem } from '../../../reducers/board';
import AddCardForm from '../cards/AddCardForm';
import CardList from '../cards/CardList';

interface TagItemProps {
  title: string;
  index: number;
  cards?: CardItem[] | null;
}

const TagItem = ({ index, title, cards }: TagItemProps) => {
  return (
    <Draggable key={title} draggableId={title} index={index}>
      {provided => (
        <TagItemContainer ref={provided.innerRef} {...provided.draggableProps}>
          <TagTitle {...provided.dragHandleProps}>{title}</TagTitle>
          <CardList tagTitle={title} cards={cards} />
          <AddCardForm tagValue={title} />
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
