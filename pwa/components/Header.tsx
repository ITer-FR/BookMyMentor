import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import NavBar from './Navbar';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.quaternary};
  padding: 1.9rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1``;

const LinkLogo = styled.a``;

const Header: React.FC = () => (
  <Container>
    <Link href="/">
      <LinkLogo>
        <Image src="/logo.svg" width="310px" height="41px" alt="Accueil Book My Mentor" />
        <Title className="sr-only">Book My Mentor</Title>
      </LinkLogo>
    </Link>
    <NavBar />
  </Container>
);

export default Header;
