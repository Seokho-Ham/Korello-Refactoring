import React from 'react';
import { render } from '../../utils/test-utils';
import { MainPage } from '../../pages';

describe('<MainPage/>', () => {
  it('render component', () => {
    const { container } = render(<MainPage />);
    expect(container).toBeInTheDocument();
  });
});
