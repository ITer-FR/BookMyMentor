// import App from "next/app";
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import type { AppProps /*, AppContext */ } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
