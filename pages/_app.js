import '../styles/global.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme';


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );}