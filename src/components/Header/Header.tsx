import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './../../styles/GlobalStyle';

const HeaderStyle = styled.header<{ isVisible: boolean }>`
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
  transition: top 0.3s;
  top: ${({ isVisible }) => (isVisible ? '0' : '-100px')}; /* Esconde o header quando não visível */
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

const Title = styled.a`
  font-size: 2rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  gap: 0.5rem; /* Espaço entre as palavras e tags */
  text-decoration: none;
  

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Ajuste o valor conforme necessário para o "hero"
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpeza do event listener ao desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <HeaderStyle isVisible={isVisible}>
        <Title href="#Home">
          <span>&lt;Fernanda</span>
          <span>Gabrielli/&gt;</span>
        </Title>
        <NavContainer>
          <NavLinkSobre href="#AboutMe">Quem sou</NavLinkSobre>
          <NavLink href="#ProjectsSection">Projetos</NavLink>
        </NavContainer>
        <ContactButton href="#contact">Contato</ContactButton>
      </HeaderStyle>
    </>
  );
};

export default Header;
