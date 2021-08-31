import React from 'react';
import { GlobalStyle } from './styles/global-style';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage, BoardPage, LoginPage } from './pages';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/theme';
import Header from './components/common/Header';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={myTheme}>
        <Header />
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/boards' component={MainPage} />
          <Route path='/board/:id/cards' component={BoardPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
