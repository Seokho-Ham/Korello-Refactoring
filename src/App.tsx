import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage, BoardPage, LoginPage } from './pages';
import Header from './components/common/Header';
const App: React.FC = () => {
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
