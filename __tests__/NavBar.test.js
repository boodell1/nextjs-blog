import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import NavBar from '../components/navBar.js'

describe('NavBar', () => {
  const title = 'Test Title';

  it('renders without crashing', () => {
    render(<NavBar title={title} />);
  });

  it('displays the correct title', () => {
    render(<NavBar title={title} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('displays 3 labels', () => {
    render(<NavBar title={title} />);
    const navLinks = screen.getAllByText('Label');
    expect(navLinks).toHaveLength(3);
  });

  it('displays the ShoppingCartIcon', () => {
    render(<NavBar title={title} />);
    expect(screen.getByTestId('ShoppingCartIcon')).toBeInTheDocument();
  });

  it('displays the AccountCircleIcon', () => {
    render(<NavBar title={title} />);
    expect(screen.getByTestId('AccountCircleIcon')).toBeInTheDocument();
  });

  it('applies styles correctly', () => {
    render(<NavBar title={title} />);
    const paper = screen.getByTestId('navbar');

    const shoppingCartIcon = screen.getByTestId('ShoppingCartIcon');
    const accountCircleIcon = screen.getByTestId('AccountCircleIcon');
    
    expect(shoppingCartIcon).toHaveStyle({ color: 'white' });
    expect(accountCircleIcon).toHaveStyle({ color: '#BDBDBD' });
  });
});
