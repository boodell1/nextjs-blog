import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogGroup from '../components/blogGroup.js'


describe('BlogGroup', () => {
  const blogData = [
    { title: 'Blog 1', multi_line: 'Content 1', id: '1', image: 'test-image.jpg' },
    { title: 'Blog 2', multi_line: 'Content 2', id: '2', image: 'test-image.jpg' },
    { title: 'Blog 3', multi_line: 'Content 3', id: '3', image: 'test-image.jpg' },
  ];

  it('renders without crashing', () => {
    render(<BlogGroup data={blogData} />);
  });

  it('renders the correct number of BlogCard components', () => {
    render(<BlogGroup data={blogData} />);
    const blogCards = screen.getAllByTestId('blog-card');
    expect(blogCards).toHaveLength(blogData.length);
  });

  it('passes the correct data to each BlogCard component', () => {
    render(<BlogGroup data={blogData} />);
        blogData.forEach((blog, index) => {
            expect(screen.getAllByTestId('blog-card')[index]).toHaveTextContent(blog.title);
    });
  });

  it('applies styles correctly', () => {
    render(<BlogGroup data={blogData} />);
    const cardGrid = screen.getByTestId('card-grid');
    expect(cardGrid).toHaveStyle({
      direction: 'row',
      justifyContent: 'left',
      alignItems: 'left',
    });
  });
});
