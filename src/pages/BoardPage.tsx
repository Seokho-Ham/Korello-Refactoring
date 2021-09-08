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
  getCardAction,
  setBoardIdAction,
  TagItem,
} from '../reducers/board';
import BoardAPI from '../api/board';
import { RootState } from '../reducers';
import Loading from '../components/common/Loading';

export interface LocationState {
  background: { pathname: string; search: string; hash: string; state: {} | undefined };
}
const BoardPage = () => {
  const { loading } = useSelector((state: RootState) => state.boardReducer);
  const dispatch = useDispatch();
  const location = useLocation<LocationState>();
  if (!location.state && location.pathname.includes('card/')) {
    const boardId = Number(location.pathname.slice(7, 9));
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
    const boardId = Number(location.pathname.slice(7, 9));
    dispatch(setBoardIdAction(String(boardId)));
    (async () => {
      dispatch(boardLoadingAction());
      const { result_body } = await BoardAPI.getCardList(String(boardId));
      const cardList: { [key: string]: CardItem[] } = {};
      const list: string[] = [];
      result_body.map((el: CardItem) => {
        if (!list.includes(el.tagValue)) {
          list.push(el.tagValue);
          if (!cardList[el.tagValue]) {
            cardList[el.tagValue] = [el];
          } else {
            cardList[el.tagValue].push(el);
          }
        }
      });
      const tagList: TagItem[] = [];
      list.map((el, index) => {
        tagList.push({ name: el, order: index });
      });
      dispatch(getCardAction({ tagList, cardList }));
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
