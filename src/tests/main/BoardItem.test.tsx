import React from 'react';
import { render, screen } from '@testing-library/react';
import BoardItem from '../../components/main/BoardItem';

describe('<BoardItem/>', () => {
  const item = {
    id: 99,
    title: 'fake data',
  };
  it('render BoardItem on document', () => {
    // const { container } = render(<BoardItem id={item.id} title={item.title} />);
    // expect(container).toBeInTheDocument();
  });
});
