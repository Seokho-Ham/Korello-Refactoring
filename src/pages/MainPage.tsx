import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import BoardListContainer from '../components/main/BoardListContainer';
import SideBar from '../components/main/SideBar';
const MainPage = () => {
  const onClickHandler: () => void = () => {
    console.log('button clicked');
  };
  return (
    <MainWrapper>
      <SideBar />
      <BoardListContainer />
    </MainWrapper>
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
