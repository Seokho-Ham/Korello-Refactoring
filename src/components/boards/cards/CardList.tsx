import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { Card } from '../../../assets/data';
import CardItem from './CardItem';

const CardList = ({ id, tagTitle, cards }: { id: number; tagTitle: string; cards: Card[] }) => {
  return (
    <Droppable droppableId={tagTitle}>
      {(provided, snapshot) => (
        <CardListContainer
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
          {...provided.droppableProps}
        >
          {cards.map((item, num) => (
            <CardItem key={item.id} id={item.id} title={item.title} content={item.content} />
          ))}
          {provided.placeholder}
        </CardListContainer>
      )}
    </Droppable>
  );
};

export default CardList;

const CardListContainer = styled.div<{ isDraggingOver: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 5px;
  background-color: ${({ isDraggingOver }) => (isDraggingOver ? 'lightblue' : 'none')};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: scroll;
`;
