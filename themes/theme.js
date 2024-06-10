import { createTheme } from "@mui/material"

const theme = createTheme({
    breakpoints: {
        values: {
        xl: 1400
        }
    },
    palette: {
        primary: {
        main: '#009688'
        },
        secondary: {
        main: '#ff9800'
        }
    }
})

export default theme;

// const palette = {
//     primary: '#009688',
//     secondary: '#ff9800'
// }

// const breakpoints = {
//     xl: 1400,
// }

