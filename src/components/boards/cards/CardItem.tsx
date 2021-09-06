import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const CardItem = ({ id, title, content }: { id: number; title: string; content: string }) => {
  return (
    <Draggable key={id} draggableId={`title${id}`} index={id}>
      {provided => (
        <CardItemContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h2>{title}</h2>
          <div>{content}</div>
        </CardItemContainer>
      )}
    </Draggable>
  );
};

export default CardItem;

const CardItemContainer = styled.div`
  min-height: 50px;
  max-height: 100px;
  background: #fff;
  margin: 5px;
  padding: 5px;
  /* box-shadow: ${({ theme }) => theme.shadow}; */
  border-radius: ${({ theme }) => theme.borderRadius};
`;
