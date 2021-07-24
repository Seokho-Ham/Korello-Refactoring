import React from 'react';
import styled from 'styled-components';
const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <LoginItemWrapper>로그인 화면입니다.</LoginItemWrapper>
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
  border: 1px solid grey;
  overflow-y: hidden;
`;

const LoginItemWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 600px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
`;
