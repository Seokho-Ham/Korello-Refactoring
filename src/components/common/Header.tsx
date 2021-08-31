import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/title-logo.png';

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderLogo />
    </HeaderDiv>
  );
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

const HeaderLogo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: 133px;
  display: inline-block;
  width: 10rem;
  height: 100%;
  &:hover {
    opacity: 0.7;
  }
`;
