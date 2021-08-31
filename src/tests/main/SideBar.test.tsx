import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SideBar, { sideBarList } from '../../components/main/SideBar';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../../App';
import rootReducer from '../../reducers';
import { createStore } from 'redux';

describe('<SideBar/>', () => {
  it('render SideBar', () => {
    const { container } = render(
      <BrowserRouter>
        <ThemeProvider theme={myTheme}>
          <SideBar />
        </ThemeProvider>
      </BrowserRouter>,
    );
    expect(container).toBeInTheDocument();
    const boardElement = screen.queryByText('Board');
    expect(boardElement).toBeInTheDocument();
  });

  it('render clicked page', () => {
    const store = createStore(rootReducer);
    localStorage.setItem('accessToken', '1');

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    sideBarList.map(el => {
      const item = screen.getByText(el.name);
      userEvent.click(item);
      expect(screen.getByText('보드 종류')).toBeInTheDocument();
    });
  });
});
