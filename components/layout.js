import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import NavBar from '/components/NavBar.js'



const name = 'Austen Boodell';
export const siteTitle = 'Next.js Sample Website';

const StyledBox = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.xl, //todo austen, check that this is what the xl breakpoint means
}))


export default function Layout({ children, home, data }) {
  return (
    <StyledBox>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavBar title={siteTitle}/>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </StyledBox>
  );
}