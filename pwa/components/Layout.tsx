import styled, { ThemeProvider } from 'styled-components';
import { useContext } from 'react';

import Head from 'next/head';
import Header from '../components/Header';
import ToggleTheme from '../components/ToggleTheme';

import { ThemeContext, THEMELIST, ThemeToggleProvider } from '../contexts/ThemeContext';
import { lightTheme, darkTheme } from '../theme/appTheme';
import GlobalStyle from '../theme/globalStyle';

const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
`;

const LayoutComponent = ({ children }) => {
  const state = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>BookMyMentor</title>
      </Head>
      <ThemeProvider theme={state.theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Header />
        <ToggleTheme />
        <Container>{children}</Container>
      </ThemeProvider>
    </>
  );
};

const Layout = ({ children }) => {
  return (
    <ThemeToggleProvider startingTheme={THEMELIST.LIGHT}>
      <LayoutComponent>{children}</LayoutComponent>
    </ThemeToggleProvider>
  );
};

export default Layout;
