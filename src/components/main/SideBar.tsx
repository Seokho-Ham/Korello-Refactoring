import React from 'react';
import styled from 'styled-components';
const SideBar = () => {
  return (
    <SideBarWrapper>
      <SideBarTitle href='http://localhost:8080/boards'>
        <span>Board</span>
      </SideBarTitle>
    </SideBarWrapper>
  );
};

export default SideBar;

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  /* border: 1px solid; */
`;
const SideBarTitle = styled.a`
  margin: 20px;
  font-size: 18px;
  font-weight: bold;
  min-height: 50px;
  border-radius: 5px;
  background-color: #f5f5f5;
  span {
    margin-left: 10px;
  }
`;
