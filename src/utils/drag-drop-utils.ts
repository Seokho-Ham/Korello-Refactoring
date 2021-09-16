import { Dispatch } from 'react';
import { DraggableLocation } from 'react-beautiful-dnd';
import BoardApi from '../api/board';
import { CardItem, setCardAction } from '../reducers/board';

const TOP = 'TOP';
const LAST = 'LAST';
const MIDDLE = 'MIDDLE';

export const changeDisplayOrder = async (
  sameTag: boolean,
  location: string,
  source: DraggableLocation,
  destination: DraggableLocation,
  cardList: { [key: string]: CardItem[] },
  dispatch: Dispatch<{
    type: 'board/CARD';
    payload: {
      [key: string]: CardItem[];
    };
  }>,
) => {
  const boardId = window.location.pathname.slice(7, 9);
  const sourceTagValue = source.droppableId;
  const destinationTagValue = destination.droppableId;
  const list = { ...cardList };
  const movedCard = list[sourceTagValue][source.index];
  const nextCard = list[sourceTagValue][source.index + 1] && list[sourceTagValue][source.index + 1];
  let destinationCard = list[destinationTagValue][destination.index];

  if (nextCard) nextCard.linkId = movedCard.linkId;
  if (!sameTag) movedCard.tagValue = destinationTagValue;
  switch (location) {
    case TOP:
      destinationCard.linkId = Number(movedCard.id);
      movedCard.linkId = 0;
      break;
    case MIDDLE:
      if (!sameTag || (sameTag && source.index > destination.index)) {
        movedCard.linkId = destinationCard.linkId;
      } else {
        movedCard.linkId = Number(destinationCard.id);
        destinationCard = list[destinationTagValue][destination.index + 1];
      }

      destinationCard.linkId = Number(movedCard.id);
      break;
    case LAST:
      movedCard.linkId = Number(destinationCard.id);
      break;
    default:
      return;
  }

  const item = list[sourceTagValue].splice(source.index, 1)[0];
  list[destinationTagValue].splice(destination.index, 0, item);
  dispatch(setCardAction(list));

  const res1 = sameTag
    ? await BoardApi.changeCardOrder(boardId, {
        id: movedCard.id,
        linkId: movedCard.linkId,
      })
    : await BoardApi.changeCardOrderAndTag(boardId, {
        id: movedCard.id,
        tagValue: movedCard.tagValue,
        linkId: movedCard.linkId,
      });
  // 밀린 카드에 대한 요청
  const res2 = await BoardApi.changeCardOrder(boardId, {
    id: destinationCard.id,
    linkId: destinationCard.linkId,
  });

  //기존 위치 다음카드에 대한 요청

  nextCard &&
    (await BoardApi.changeCardOrder(boardId, {
      id: nextCard.id,
      linkId: nextCard.linkId,
    }));

  if (res1.result_code === 200 && res2.result_code === 200) {
    return true;
  } else return false;
};

export const customOnDragEnd = async (
  source: DraggableLocation,
  destination: DraggableLocation | undefined,
  dispatch: Dispatch<{
    type: 'board/CARD';
    payload: {
      [key: string]: CardItem[];
    };
  }>,
  cardList: {
    [key: string]: CardItem[];
  },
) => {
  if (
    !destination ||
    (source.index === destination.index && source.droppableId === destination.droppableId)
  )
    return;

  if (source.droppableId === 'tag-list' && destination.droppableId === 'tag-list') {
    //태그 이동의 경우
  } else {
    let sameTag = false;
    let location = '';
    if (destination.index === 0) {
      location = 'TOP';
    } else if (destination.index === cardList[destination.droppableId].length - 1) {
      location = 'LAST';
    } else {
      location = 'MIDDLE';
    }
    //카드 이동의 경우
    if (source.droppableId === destination.droppableId) {
      //해당 태그 내에서의 이동할 경우
      sameTag = true;
    }
    //태그를 벗어나서 다른 태그 내로 이동할 경우
    const resStatus = await changeDisplayOrder(
      sameTag,
      location,
      source,
      destination,
      cardList,
      dispatch,
    );
    if (!resStatus) {
      alert('카드 이동 실패');
      window.location.reload();
    }
  }
};
