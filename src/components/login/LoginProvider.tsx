import React, { ReactChild, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../reducers/login';
import Auth from '../../utils/auth';

type LoginProviderProps = {
  children?: ReactChild;
};

const LoginProvider = ({ children }: LoginProviderProps) => {
  const tokenStatus = Auth.checkUrlToken(window.location.search);
  const { accessToken } = Auth.getToken();
  const dispatch = useDispatch();

  const checkLogin = () => {
    if (tokenStatus || accessToken) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  };

  useEffect(() => {
    checkLogin();
  });

  return <>{children}</>;
};

export default LoginProvider;
