import React, { ChangeEventHandler } from 'react';
import userEvent from '@testing-library/user-event';
import Input from '../../components/common/Input';
import { render, screen } from '../../utils/test-utils';
import useInput from '../../hooks/useInput';

describe('<Input/>', () => {
  const UserInput: React.FC = () => {
    const [value, onChangeHandler] = useInput('');
    return <Input value={value} onChange={onChangeHandler} type='text' />;
  };

  it('should render Input Component on document', () => {
    const { container } = render(<UserInput />);
    expect(container).toBeInTheDocument();
  });

  it('should type in input', () => {
    render(<UserInput />);

    const inputElement = screen.getByRole('textbox');
    userEvent.type(inputElement, 'hello');
    screen.debug(inputElement);
    expect(inputElement).toHaveValue('hello');
  });
});
