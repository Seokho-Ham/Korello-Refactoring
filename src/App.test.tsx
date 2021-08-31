import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore } from 'redux';
import Header from './components/common/Header';
const store = createStore(rootReducer);

describe('<App/>', () => {
  it('render components on App', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(container).toBeInTheDocument();
  });

  it('render Header', () => {
    render(<Header />);
    expect(screen.getByText('헤더입니다.')).toBeInTheDocument();
  });
});
