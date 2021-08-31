import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const sideBarList: { id: number; type: string; name: string }[] = [
  { id: 1, type: 'board', name: 'Board' },
];

const SideBar = () => {
  return (
    <SideBarWrapper>
      <SideBarTitle to='/boards'>
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
`;
const SideBarTitle = styled(Link)`
  margin: 20px;
  font-size: ${({ theme }) => theme.font.large};
  font-weight: bold;
  min-height: 50px;
  border-radius: 5px;
  background-color: #f5f5f5;
  span {
    margin-left: 10px;
  }
`;
