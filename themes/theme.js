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

