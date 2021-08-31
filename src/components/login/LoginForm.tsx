import React from 'react';
import styled from 'styled-components';
import mainLogo from '../../assets/images/main-logo.png';

const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <LogoContainer />
      <LoginItemWrapper>
        <a href='http://hyuki.app/oauth2/authorization/kakao' data-testid='login-button'>
          <img
            src='//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg'
            width='222'
            alt='login'
          />
        </a>
      </LoginItemWrapper>
    </LoginFormWrapper>
  );
};

export default LoginForm;

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 50%;
  overflow-y: hidden;
`;

const LoginItemWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
  color: #fff;
  background: ${({ theme }) => theme.color.grey1};
`;

const LogoContainer = styled.div`
  background-image: url(${mainLogo});
  background-repeat: no-repeat;
  background-size: 500px;
  width: 500px;
  height: 200px;
  margin: 20px;
`;
