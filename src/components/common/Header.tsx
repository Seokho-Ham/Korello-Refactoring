import React from 'react';
import styled from 'styled-components';
const Header = () => {
  return <HeaderDiv>헤더입니다.</HeaderDiv>;
};

export default Header;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: #fff;
  background: #3d3bb8;
`;
