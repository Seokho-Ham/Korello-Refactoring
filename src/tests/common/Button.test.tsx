import userEvent from '@testing-library/user-event';
import React from 'react';
import Button from '../../components/common/Button';
import { render, screen } from '../../utils/test-utils';

describe('<Button/>', () => {
  let onClick: () => {};
  beforeEach(() => {
    onClick = jest.fn();
  });
  it('should render Component on document', () => {
    const { container } = render(<Button onClick={onClick}>Click Me</Button>);
    expect(container).toBeInTheDocument();
  });
  it('should call handler when button is clicked', () => {
    render(<Button onClick={onClick}>Click Me</Button>);
    const element = screen.getByText('Click Me');
    userEvent.click(element);
    expect(onClick).toBeCalled();
  });
});
