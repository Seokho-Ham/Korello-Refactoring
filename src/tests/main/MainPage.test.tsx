import React from 'react';
import { render } from '@testing-library/react';
import { MainPage } from '../../pages';
import { BrowserRouter } from 'react-router-dom';

describe('<MainPage/>', () => {
  it('render component', () => {
    const { container } = render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>,
    );
    expect(container).toBeInTheDocument();
  });
});
