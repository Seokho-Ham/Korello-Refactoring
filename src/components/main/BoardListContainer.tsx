import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../reducers';
import BoardList from './BoardList';
import Loading from '../common/Loading';

const BoardListContainer = () => {
  const { status } = useSelector((state: RootState) => state.mainReducer);
  return (
    <BoardListWrapper>
      <BoardListDiv>{status ? <Loading /> : <BoardList />}</BoardListDiv>
    </BoardListWrapper>
  );
};

export default BoardListContainer;

const BoardListWrapper = styled.div`
  width: 700px;
  height: 100%;
`;

const BoardListDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;
