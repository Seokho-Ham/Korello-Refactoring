import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import LoginForm from '../components/login/LoginForm';
import { checkUrlToken } from '../utils/login/checkUrlToken';
import { RootState } from '../reducers';
import { login } from '../reducers/login';
import mainBg from '../assets/images/main-bg2.jpg';

const LoginPage = () => {
  const loginStatus = useSelector((state: RootState) => state.loginStatus.status);
  const dispatch = useDispatch();

  useEffect(() => {
    const tokenStatus = checkUrlToken(window.location.search);
    const token = localStorage.getItem('accessToken');
    if (tokenStatus || token) {
      dispatch(login());
    }
  }, []);

  return loginStatus ? (
    <Redirect to='/boards' />
  ) : (
    <>
      <LoginPageWrapper>
        <LoginPageContainer>
          <LoginForm />
        </LoginPageContainer>
      </LoginPageWrapper>
    </>
  );
};

export default LoginPage;

const LoginPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const LoginPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
  background-image: url(${mainBg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
