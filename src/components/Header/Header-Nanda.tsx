import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './../../styles/GlobalStyle';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: var(--grey);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex: 1;
  padding: 5px 0;
  margin-right: 200px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--oldpink);
  font-weight: bold;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: var(--pink);
  }
`;

const NavLinkSobre = styled.a`
  text-decoration: none;
  color: var(--oldpink);
  font-weight: bold;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: var(--pink);
  }
`;

const ContactButton = styled.a`
  text-decoration: none;
  padding: 12px 30px;
  background-color: var(--oldpurple);
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 30px;
  transition: background-color 0.3s, transform 0.2s;
  display: inline-block;
  margin-left: 5px;
  
  &:hover {
    background-color: var(--pink);
    transform: scale(1.05);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: flex;
  gap: 0.5rem;

  span {
    &:first-child {
      color: var(--oldpink);
    }
    &:last-child {
      color: var(--oldpurple);
    }
  }
`;

const Header: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderStyle>
        <Title>
          <span>&lt;Fernanda</span>
          <span>Gabrielli/&gt;</span>
        </Title>
        <NavContainer>
          <NavLinkSobre href="#sobre">Quem sou</NavLinkSobre>
          <NavLink href="#projetos">Projetos</NavLink>
        </NavContainer>
        <ContactButton href="#contato">Contato</ContactButton>
      </HeaderStyle>
    </>
  );
};

export default Header;
