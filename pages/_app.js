import { ThemeProvider } from "styled-components";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      html: {
        margin: 0,
        padding: 0,
      },
      a: {
        _hover: {
          textDecoration: "underline",
        },
      },
      h1: {
        fontSize: "4xl",
      },
      h2: {
        fontSize: "2xl",
      },
      h3: {
        fontSize: "xl",
      },
      img: {
        display: "block",
        width: "100%",
      },
    },
  },
  fonts: {
    header: "Archivo Black, sans-serif",
    body: "Archivo Black, sans-serif",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <>
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
