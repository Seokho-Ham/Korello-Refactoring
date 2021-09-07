import React from 'react';
import { BoardPage } from '../../pages';
import { render } from '../../utils/test-utils';

describe('<Board Page/>', () => {
  it('should render BoardPage on document', () => {
    const { container } = render(<BoardPage />);
    expect(container).toBeInTheDocument();
  });
});
