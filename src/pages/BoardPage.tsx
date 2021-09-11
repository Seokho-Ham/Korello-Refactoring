import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router';
import styled from 'styled-components';
import BoardButtons from '../components/boards/BoardButtons';
import BoardDetailContainer from '../components/boards/BoardDetailContainer';
import CardModal from '../components/boards/modal/CardModal';
import {
  boardLoadingAction,
  CardItem,
  setBoardDataAction,
  setBoardIdAction,
  TagItem,
} from '../reducers/board';
import BoardApi from '../api/board';
import { RootState } from '../reducers';
import Loading from '../components/common/Loading';
import Firebase from '../firebase';

export interface LocationState {
  background: { pathname: string; search: string; hash: string; state: {} | undefined };
}
const BoardPage = () => {
  const { loading } = useSelector((state: RootState) => state.boardReducer);
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
      console.log(boardLabelData);
      const cardList: { [key: string]: CardItem[] } = {};
      // 3. tag이름에 따라 card를 분배한다.
      cardData.result_body.map((el: CardItem) => {
        if (!cardList[el.tagValue]) {
          cardList[el.tagValue] = [el];
        } else {
          cardList[el.tagValue].push(el);
        }
      });
      cardList.rawData = cardData.result_body;

      dispatch(
        setBoardDataAction({ tagList, cardList, boardLabelList: boardLabelData.result_body }),
      );
    })();
  }, []);

  return (
    <BoardWrapper>
      <BoardButtons />
      <Switch location={background || location}>
        {loading ? <Loading /> : <BoardDetailContainer />}
      </Switch>
      {background && <Route path={'/board/:id/card/:id'} children={<CardModal />} />}
    </BoardWrapper>
  );
};

export default BoardPage;

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
