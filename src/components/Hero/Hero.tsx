import React from 'react';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';
import GlobalStyle from './../../styles/GlobalStyle';

const HeroSection = styled.section`
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
  height: 100vh;
  padding: 0 20px;
  background-color: var(--dark);
  color: var(--snow); 
`;

const CodeBlock = styled.pre`
  font-family: 'Fira Code', monospace;
  color: var(--snow); 
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
  flex-wrap: wrap; /
  gap: 0.5rem; /* Espaço entre as palavras */

  span {
    &:first-child {
      color: var(--oldpink); 
    }
    &:last-child {
      color: var(--oldpurple); 
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
  const phrases = [
    'que acredita na importância do aprendizado constante, tanto em tecnologia quanto em idiomas.',
    'que acredita que tecnologia não é só sobre código, mas sim sobre a possibilidade de mudar o mundo.',
    'que se anima com as possibilidades infinitas que a tecnologia oferece para inovar.',
    'que vê cada projeto como uma chance de aprender algo novo e contribuir com algo maior.',
    'que enxerga a importância do olhar humano em tudo que faz.',
    'que acredita no poder da colaboração e na força do impacto social.',
    'que sempre foi sonhadora e que sempre soube que desistir não era uma opção.',
  ];

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
          // Uma desenvolvedora{' '}
          <span>
            <Typewriter
              words={phrases}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </Subtitle>
      </TextContainer>
    </HeroSection>
  );
};

export default Hero;
