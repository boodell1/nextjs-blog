import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import BlogCard from '../components/blogCard.js'


describe('BlogCard', () => {
    const id = '1'
    const title =  'Test Title'
    const image = 'test-image.jpg'
    const multi_line = 'Test multi-line content.'

  it('renders without crashing', () => {
    render(<BlogCard title={title} image={image} id={id} multi_line={multi_line} />);
  });

  it('displays the correct title', () => {
    render(<BlogCard title={title} image={image} id={id} multi_line={multi_line} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('displays the correct image', () => {
    render(<BlogCard title={title} image={image} id={id} multi_line={multi_line} />);
    const img = screen.getByAltText('article title photo');
    expect(img).toHaveAttribute('src', 'test-image.jpg');
  });

  it('displays the correct content', () => {
    render(<BlogCard title={title} image={image} id={id} multi_line={multi_line} />);
    expect(screen.getByText('Test multi-line content.')).toBeInTheDocument();
  });

  it('has a button that links to the correct URL', () => {
    render(<BlogCard title={title} image={image} id={id} multi_line={multi_line} />);
    const button = screen.getByRole('link', { name: /read more/i });
    expect(button).toHaveAttribute('href', '/posts/1');
  });

  it('applies styles correctly', () => {
    render(<BlogCard title={title} image={image} id={id} multi_line={multi_line} />);
    const link = screen.getByRole('link', { name: /read more/i });

    expect(link).toHaveStyle({
        borderRadius: '50px',
        textTransform: 'none',
    });
  });
});
