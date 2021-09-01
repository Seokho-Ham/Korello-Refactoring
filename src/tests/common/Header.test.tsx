import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../../App';
import Header from '../../components/common/header/Header';
import { render, screen } from '../../utils/test-utils';

describe('<Header/>', () => {
  it('should render Header component on document', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });
  it('should render buttons on document', () => {
    render(<Header />);

    const logoutBt = screen.getByText('Logout');
    const logoImg = screen.getByLabelText('logo-image');
    const homeBt = screen.getByRole('button', { name: 'button-home' });

    expect(logoutBt).toBeInTheDocument();
    expect(logoImg).toBeInTheDocument();
    expect(homeBt).toBeInTheDocument();
  });

  it('the buttons should activate', () => {
    localStorage.setItem('accessToken', 'token');
    render(<App />);

    const logoutBt = screen.getByText('Logout');
    const logoImg = screen.getByLabelText('logo-image');
    const homeBt = screen.getByRole('button', { name: 'button-home' });

    userEvent.click(homeBt);
    expect(screen.getByText('보드 1')).toBeInTheDocument();

    userEvent.click(logoImg);
    expect(screen.getByText('보드 1')).toBeInTheDocument();

    userEvent.click(logoutBt);
    expect(localStorage.getItem('accessToken')).toBe(null);
  });
});
