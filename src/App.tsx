import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage, BoardPage, LoginPage } from './pages';
import { DragDropContext } from 'react-beautiful-dnd';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/theme';
import Header from './components/common/header/Header';
import { GlobalStyle } from './styles/global-style';
import LoginProvider from './components/login/LoginProvider';
import { onDragEnd } from './utils/drag-drop-utils';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <LoginProvider>
        <DragDropContext onDragEnd={onDragEnd}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path='/' component={LoginPage} />
              <Route path='/login' component={LoginPage} />
              <Route path='/boards' component={MainPage} />
              <Route path={['/board/:id/cards', '/board/:id/card/:id']} component={BoardPage} />
            </Switch>
          </BrowserRouter>
        </DragDropContext>
      </LoginProvider>
    </ThemeProvider>
  );
};

export default App;
