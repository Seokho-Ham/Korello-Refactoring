import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router';
import styled from 'styled-components';
import BoardButtons from '../components/boards/BoardButtons';
import BoardDetailContainer from '../components/boards/BoardDetailContainer';
import CardModal from '../components/boards/modal/CardModal';
import {
  boardLoadingAction,
  setBoardDataAction,
  setBoardIdAction,
  setCardAction,
  TagItem,
} from '../reducers/board';
import BoardApi from '../api/board';
import { RootState } from '../reducers';
import Loading from '../components/common/Loading';
import Firebase from '../firebase';
import { handleBoardData } from '../utils/handleBoardData';
import {
  DragDropContext,
  DropResult,
  OnDragEndResponder,
  ResponderProvided,
} from 'react-beautiful-dnd';
import { customOnDragEnd } from '../utils/drag-drop-utils';
import event from '../api/event';

export interface LocationState {
  background: { pathname: string; search: string; hash: string; state: {} | undefined };
}
const BoardPage = () => {
  const loginStatus = useSelector((state: RootState) => state.loginStatus.status);
  const { loading, cardList } = useSelector((state: RootState) => state.boardReducer);
  const dispatch = useDispatch();
  const location = useLocation<LocationState>();
  if (!location.state && location.pathname.includes('card/')) {
    const boardId = location.pathname.slice(7, 9);
    location.state = {
      background: {
        pathname: `/board/${boardId}/cards`,
        search: '',
        hash: '',
        state: undefined,
      },
    };
  }
  const background = location.state && location.state.background;

  const onDragEnd: OnDragEndResponder = async (result: DropResult, provided: ResponderProvided) => {
    console.log(result);
    const { source, destination } = result;
    customOnDragEnd(source, destination, dispatch, cardList);
  };

  useEffect(() => {
    const boardId = location.pathname.slice(7, 9);
    dispatch(setBoardIdAction(boardId));
    (async () => {
      dispatch(boardLoadingAction());
      // 1. firebase로부터 tag목록을 받아와서 스토어에 데이터를 저장한다.
      const list: any = await Firebase.getTagList(boardId);
      const tagList: TagItem[] = [];
      Object.keys(list).map(el => {
        tagList.push({ name: el, order: list[el].order });
      });

      // 2. korello서버로부터 card목록을 받아온다.
      const cardData = await BoardApi.getCardList(boardId);
      const boardLabelData = await BoardApi.getBoardLabelList(boardId);

      const cardList = handleBoardData(cardData.result_body);
      // console.log('cardList state: ', cardList);

      cardList.rawData = cardData.result_body;

      dispatch(
        setBoardDataAction({ tagList, cardList, boardLabelList: boardLabelData.result_body }),
      );
    })();
  }, []);

  return loginStatus ? (
    <BoardWrapper>
      <BoardButtons />
      <DragDropContext onDragEnd={onDragEnd}>
        <Switch location={background || location}>
          {loading ? <Loading /> : <BoardDetailContainer />}
        </Switch>
        {background && <Route path={'/board/:id/card/:id'} children={<CardModal />} />}
      </DragDropContext>
    </BoardWrapper>
  ) : (
    <Redirect to={location.pathname} />
  );
};

export default BoardPage;

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
