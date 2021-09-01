import React from 'react';
import { render } from '../../utils/test-utils';
import { LoginPage } from '../../pages';

describe('<Login />', () => {
  it('should render Login Component on document', () => {
    const { container } = render(<LoginPage />);
    expect(container).toBeInTheDocument();
  });
});
