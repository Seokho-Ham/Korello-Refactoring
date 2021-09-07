import React from 'react';
import { Route, Switch, useLocation } from 'react-router';
import styled from 'styled-components';
import BoardButtons from '../components/boards/BoardButtons';
import BoardDetailContainer from '../components/boards/BoardDetailContainer';
import CardModal from '../components/boards/modal/CardModal';
export interface LocationState {
  background: { pathname: string; search: string; hash: string; state: {} | undefined };
}
const BoardPage = () => {
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
  return (
    <BoardWrapper>
      <BoardButtons />
      <Switch location={background || location}>
        <BoardDetailContainer />
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
