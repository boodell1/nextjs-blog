import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'


describe('Home', () => {
    it('should have Blog text', () => {
        render(<Home/>)
        const myElem = screen.getByText('Blog')
        expect(myElem).toBeInTheDocument()
    })
})

