// import '@testing-library/jest-dom'
// import { render, screen } from '@testing-library/react'
// import Home from '../pages/index'
// import { getSortedPostsData } from '../lib/posts'

// jest.mock('../lib/posts', () => ({
//     getSortedPostsData: jest.fn(),
// }));

// describe('Home', () => {
//     it('should have Blog text', () => {
//         render(<Home/>)
//         const myElem = screen.getByText('Blog')
//         expect(myElem).toBeInTheDocument()
//     })
// })


import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import { getSortedPostsData } from '../lib/posts';

// Mock the `getSortedPostsData` function
jest.mock('../lib/posts', () => ({
  getSortedPostsData: jest.fn(),
}));

describe('Home', () => {
  const allPostsData = [
    { id: '1', date: '2023-01-01', title: 'First Post' },
    { id: '2', date: '2023-02-01', title: 'Second Post' },
  ];

  beforeAll(() => {
    getSortedPostsData.mockReturnValue(allPostsData);
  });

  it('renders the heading and description', () => {
    render(<Home allPostsData={allPostsData} />);
    expect(screen.getByText("Hey, I'm Austen (they/them) and this is my onboarding practice website")).toBeInTheDocument();
    expect(screen.getByText(/This is a sample website/)).toBeInTheDocument();
  });

  it('renders a list of blog posts', () => {
    render(<Home allPostsData={allPostsData} />);
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('First Post')).toBeInTheDocument();
    expect(screen.getByText('Second Post')).toBeInTheDocument();
  });

  it('renders the dates of the blog posts', () => {
    render(<Home allPostsData={allPostsData} />);
    expect(screen.getByText('2023-01-01')).toBeInTheDocument();
    expect(screen.getByText('2023-02-01')).toBeInTheDocument();
  });
});