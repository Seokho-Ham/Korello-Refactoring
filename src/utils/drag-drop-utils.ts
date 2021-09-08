import { DropResult, OnDragEndResponder, ResponderProvided } from 'react-beautiful-dnd';

export const onDragEnd: OnDragEndResponder = (result: DropResult, provided: ResponderProvided) => {
  console.log(result);
  const { source, destination } = result;
  if (!destination) return;

  if (source.droppableId === 'tag-list' && destination.droppableId === 'tag-list') {
    //태그 이동의 경우
  } else {
    //카드 이동의 경우
    if (source.droppableId === destination.droppableId) {
      //해당 태그 내에서의 이동할 경우
    } else {
      //태그를 벗어나서 다른 태그 내로 이동할 경우
    }
  }
};
