import React from 'react';
import { render, screen } from '@testing-library/react';
import BoardItem from '../../components/main/BoardItem';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../styles/theme';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';
import { createStore } from 'redux';

describe('<BoardItem/>', () => {
  it('render BoardItem on document', () => {
    const item = {
      id: 99,
      title: 'fake data',
    };
    const { container } = render(
      <BrowserRouter>
        <ThemeProvider theme={myTheme}>
          <BoardItem key={item.id} id={item.id} title={item.title} />
        </ThemeProvider>
      </BrowserRouter>,
    );

    expect(container).toBeInTheDocument();
  });

  it('should move to Board Detail on clicked', () => {
    const store = createStore(rootReducer);
    localStorage.setItem('accessToken', '1');

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const element = screen.getByRole('link', { name: '보드 1' });
    userEvent.click(element);
    expect(screen.getByText('태그 1')).toBeInTheDocument();
  });
});
