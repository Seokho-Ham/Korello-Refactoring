import React from 'react';
import { render } from './utils/test-utils';
import App from './App';

describe('<App/>', () => {
  it('render components on App', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
