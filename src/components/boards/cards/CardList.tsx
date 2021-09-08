import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { CardItem as CardItemType } from '../../../reducers/board';
import CardItem from './CardItem';

const CardList = ({ tagTitle, cards }: { tagTitle: string; cards: CardItemType[] }) => {
  return (
    <Droppable droppableId={tagTitle}>
      {(provided, snapshot) => (
        <CardListContainer
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
          {...provided.droppableProps}
        >
          {cards.map((item, num) => (
            <CardItem key={item.id} id={Number(item.id)} title={item.name} />
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
