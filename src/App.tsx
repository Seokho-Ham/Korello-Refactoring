import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import BoardPage from './pages/BoardPage';
import LoginPage from './pages/LoginPage';
import Header from './components/common/Header';
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/boards' component={MainPage} />
        <Route path='/board/:id/cards' component={BoardPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
