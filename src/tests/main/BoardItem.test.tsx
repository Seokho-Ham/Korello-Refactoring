import React from 'react';
import { render, screen } from '../../utils/test-utils';
import BoardItem from '../../components/main/BoardItem';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('<BoardItem/>', () => {
  it('render BoardItem on document', () => {
    const item = {
      id: '99',
      name: 'fake data',
    };
    const { container } = render(<BoardItem key={item.id} id={item.id} name={item.name} />);

    expect(container).toBeInTheDocument();
  });

  // it('should move to Board Detail on clicked', () => {
  //   localStorage.setItem('accessToken', '1');
  //   render(<App />);

  //   const element = screen.getByRole('link', { name: '보드 1' });
  //   userEvent.click(element);
  //   expect(screen.getByText('태그 1')).toBeInTheDocument();
  // });
});
