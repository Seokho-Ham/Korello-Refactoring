import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import logo from '../../assets/images/title-logo.png';
import { RootState } from '../../reducers';
const Header = () => {
  const loginStatus = useSelector((state: RootState) => state.loginStatus.status);

  return (
    <HeaderDiv loginStatus={loginStatus}>
      <HeaderLogo />
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div<{ loginStatus: boolean }>`
  display: ${({ loginStatus }) => (loginStatus ? 'flex' : 'none')};
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
