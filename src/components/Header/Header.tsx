import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import GlobalStyle from './../../styles/GlobalStyle';

const FG = styled.a`
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--oldpurple);
  text-decoration: none;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeaderStyle = styled.header<{ isVisible: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--grey);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  transition: top 0.3s;
  top: ${({ isVisible }) => (isVisible ? '0' : '-100px')};

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex: 1;
  padding: 0;
  margin-right: 50px;

  @media (max-width: 768px) {
    gap: 8px;
    margin-right: 30px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--oldpink);
  font-weight: bold;
  font-size: 0.9rem;
  transition: color 0.3s;

  &:hover {
    color: var(--pink);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const LanguageButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  position: fixed;
  right: 20px;
  top: 10px;
  z-index: 20;

  @media (max-width: 768px) {
    top: 5px;
    right: 10px;
  }
`;

const LanguageButton = styled.button`
  margin-left: 5px;
  padding: 4px 8px;
  background-color: var(--oldpurple);
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--pink);
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 4px 6px;
  }
`;

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentLang = i18n.language;

  return (
    <>
      <GlobalStyle />
      <HeaderStyle isVisible={isVisible}>
        <FG href="#Home">&lt;FG /&gt;</FG>

        <NavContainer>
          <NavLink href="#AboutMe">{t('header.who')}</NavLink>
          <NavLink href="#ProjectsSection">{t('header.projects')}</NavLink>
          <NavLink href="#contact">{t('header.contact')}</NavLink>
        </NavContainer>
      </HeaderStyle>

      <LanguageButtonContainer>
        <LanguageButton
          onClick={() => changeLanguage(currentLang === 'pt' ? 'en' : 'pt')}
        >
          {currentLang === 'pt' ? 'EN-US' : 'PT'}
        </LanguageButton>
      </LanguageButtonContainer>
    </>
  );
};

export default Header;
