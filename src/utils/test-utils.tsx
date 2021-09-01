import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import { myTheme } from '../styles/theme';

const store = createStore(rootReducer);

const Wrapper: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={myTheme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
