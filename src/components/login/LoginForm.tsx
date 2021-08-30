import React from 'react';
import styled from 'styled-components';
const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <LoginItemWrapper>
        <h1>로그인 화면입니다.</h1>
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
  height: 600px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 20%);
  color: #fff;
  background: #3d3bb8;
`;
