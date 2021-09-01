import React from 'react';
import BoardListContainer from '../../components/main/BoardListContainer';
import { render } from '../../utils/test-utils';

describe('<Board List/>', () => {
  it('render Board List', () => {
    const { container } = render(<BoardListContainer />);
    expect(container).toBeInTheDocument();
  });
});
