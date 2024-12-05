import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './../../styles/GlobalStyle';

const HeroSection = styled.section`
  display: flex; /* Alinha os itens horizontalmente */
  flex-direction: row; /* Certifica-se de que os itens fiquem lado a lado */
  justify-content: space-between; /* Espaço entre os itens */
  align-items: center; /* Centraliza verticalmente */
  height: 100vh;
  padding: 0 20px;
  background-color: #121212;
  color: #ffffff;
`;

const CodeBlock = styled.pre`
  font-family: 'Fira Code', monospace;
  color: #f8f8f2;
  background-color: #282a36;
  padding: 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  white-space: pre-wrap;
  max-width: 40%; /* Limita a largura do bloco */
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 40%; /* Limita a largura do texto */
`;

const Title = styled.h1`
  font-size: 6rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-wrap: wrap; /* Permite quebras para textos longos */
  gap: 0.5rem; /* Espaço entre as palavras */

  span {
    &:first-child {
      color:  var(--oldpink); /* Rosa */
    }
    &:last-child {
      color: var(--oldpurple); /* Roxo */
    }
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #50fa7b;

  span {
    color: #ff79c6;
    font-weight: bold;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <CodeBlock>
        {`// Olá!
// Meu nome é Fernanda Gabrielli
// Sou desenvolvedora Full Stack React/Python
// Eu gosto de criar soluções com tecnologia`}
      </CodeBlock>
      <TextContainer>
        <Title>
          <span>&lt;Fernanda</span>
          <span>Gabrielli/&gt;</span>
        </Title>
        <Subtitle>
          // Eu ajudo você <span>qualitativamente</span>
        </Subtitle>
      </TextContainer>
    </HeroSection>
  );
};

export default Hero;
