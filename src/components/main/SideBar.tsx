import React from 'react';
import styled from 'styled-components';
const SideBar = () => {
  return (
    <SideBarWrapper>
      <SideBarTitle>사이드바 항목</SideBarTitle>
      <SideBarTitle>사이드바 항목</SideBarTitle>
      <SideBarTitle>사이드바 항목</SideBarTitle>
    </SideBarWrapper>
  );
};

export default SideBar;

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  border: 1px solid;
`;
const SideBarTitle = styled.a`
  margin: 5px 5px;
  border: 1px solid grey;
  min-height: 50px;
`;
