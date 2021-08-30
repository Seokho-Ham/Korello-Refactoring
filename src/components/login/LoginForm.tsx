import React from 'react';
import styled from 'styled-components';
const LoginForm = () => {
  return (
    <LoginFormWrapper>
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
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 100%;
  overflow-y: hidden;
`;

const LoginItemWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 20%);
  color: #fff;
  /* background: #3d3bb8; */
`;
