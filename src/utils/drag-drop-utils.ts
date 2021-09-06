import { DropResult, OnDragEndResponder, ResponderProvided } from 'react-beautiful-dnd';

export const onDragEnd: OnDragEndResponder = (result: DropResult, provided: ResponderProvided) => {
  console.log(result);
  const { source, destination } = result;
  if (!destination) return;

  if (source.droppableId === destination.droppableId) {
    //해당 리스트 내에서의 이동
  } else {
    //리스트를 벗어났을 경우
  }
};
