import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import BlogCard from '../components/blogCard.js'

// describe('NavBar', () => {
//     it('should have Blog text', () => {
//         render(<NavBar/>)
//         const myElem = screen.getByText('Blog')
//         expect(myElem).toBeInTheDocument()
//     })
// })


test('handles click', () => {
    const onClick = jest.fn();
    render(<BlogCard></BlogCard>);
    const buttonElement = screen.getByText('Read more');
    fireEvent.click(buttonElement);
    Experimental_CssVarsProvider(onClick).toHaveBeenCalledTimes(1);
})