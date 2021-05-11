import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Container = styled.div``;
const Nav = styled.nav``;
const Menu = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const MenuItem = styled.li``;

const MenuItemLink = styled.a`
  color: black;
  margin-right: 0.5rem;
  font-size: 1.2rem;
  @media screen and (min-width: 768px) {
    ${MenuItem}:not(:first-child) & {
      border-left: 1px solid black;
      padding-left: 0.5rem;
    }
  }
`;

const BurgerIcon = styled.div`
  width: 2.4rem;
  text-align: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Bars = styled(FontAwesomeIcon)`
  font-size: 2.4rem;
`;

const Navbar: React.FC = () => (
  <Container>
    <Nav>
      <Menu>
        <MenuItem>
          <MenuItemLink href="/">FAQ</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink href="/">Inscription</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink href="/">Connexion</MenuItemLink>
        </MenuItem>
      </Menu>
      <BurgerIcon>
        <Bars icon={faBars} />
      </BurgerIcon>
    </Nav>
  </Container>
);

export default Navbar;
