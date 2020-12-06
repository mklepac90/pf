import { ThemeProvider } from 'styled-components';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';

const theme = extendTheme({
  styles: {
    global: {
      html: {
        margin: 0,
        padding: 0,
      },
      a: {
        _hover: {
          textDecoration: 'underline',
        },
      },
      h1: {
        fontSize: '4xl',
        fontWeight: 'bold',
      },
      h2: {
        fontSize: '2xl',
        fontWeight: 'bold',
      },
      h3: {
        fontSize: 'xl',
        fontWeight: 'bold',
      },
      img: {
        display: 'block',
        width: '100%',
      },
      li: {
        padding: '0 0.5rem',
        listStyleType: '→',
        listStyle: 'none',
        fontWeight: 'medium',
      },
    },
  },
  fonts: {
    body: 'Montserrat, sans-serif',
    heading: 'Montserrat, serif',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
