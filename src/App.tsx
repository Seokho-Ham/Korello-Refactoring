import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage, BoardPage, LoginPage } from './pages';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/theme';
import Header from './components/common/Header';
import { GlobalStyle } from './styles/global-style';
const App: React.FC = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />

      <BrowserRouter>

        <Header />
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/boards' component={MainPage} />
          <Route path='/board/:id/cards' component={BoardPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
