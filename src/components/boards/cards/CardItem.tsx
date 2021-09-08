import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../../../reducers';

const CardItem = ({ id, title }: { id: number; title: string }) => {
  const { currentBoardId } = useSelector((state: RootState) => state.boardReducer);

  const location = useLocation();
  return (
    <Draggable key={id} draggableId={`title${id}`} index={id}>
      {provided => (
        <Link
          to={{ pathname: `/board/${currentBoardId}/card/${id}`, state: { background: location } }}
        >
          <CardItemContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div>{title}</div>
          </CardItemContainer>
        </Link>
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
