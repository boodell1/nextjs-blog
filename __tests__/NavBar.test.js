import '@testing-library/jest-dom'
// import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react'
import NavBar from '../components/navBar.js'

// describe('NavBar', () => {
//     it('should have Blog text', () => {
//         render(<NavBar/>)
//         const myElem = screen.getByText('Blog')
//         expect(myElem).toBeInTheDocument()
//     })
// })

// it('changes the class when hovered', () => {
//     const title = 'test title'
//     const component = render(
//         <NavBar title={title}></NavBar>,
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();

//     // manually trigger the callback
//     renderer.act(() => {
//         tree.props.onMouseEnter();
//     });
//     // re-rendering
//     tree = component.toJSON();
//     expect(tree).toMatchSnapshot();

//     // manually trigger the callback
//     renderer.act(() => {
//         tree.props.onMouseLeave();
//     });
//     // re-rendering
//     tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });
