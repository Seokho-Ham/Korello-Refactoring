import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import MainApi from '../api/main';
import BoardListContainer from '../components/main/BoardListContainer';
import SideBar from '../components/main/SideBar';
import Firebase from '../firebase';
import { RootState } from '../reducers';
import { loading, getListAction } from '../reducers/main';

const MainPage = () => {
  const loginStatus = useSelector((state: RootState) => state.loginStatus.status);

  const onClickHandler: () => void = () => {
    console.log('button clicked');
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(loading());

      const { result_body } = await MainApi.getBoardList();
      console.log(result_body);
      if (result_body) {
        dispatch(getListAction(result_body));
      } else {
        dispatch(getListAction([]));
      }
    };
    fetchData();
  }, []);

  return loginStatus ? (
    <MainWrapper>
      <SideBar />
      <BoardListContainer />
    </MainWrapper>
  ) : (
    <Redirect to='/' />
  );
};

export default MainPage;

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
