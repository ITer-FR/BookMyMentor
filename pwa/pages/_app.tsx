// import App from "next/app";
import { ThemeProvider } from 'styled-components';
import type { AppProps /*, AppContext */ } from 'next/app';
import 'normalize.css/normalize.css';

import { lightTheme } from '../theme/appTheme';
import GlobalStyle from '../theme/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
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
