import React, { useEffect } from 'react';
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
  background-color: var(--dark); /* Certifique-se de que é uma cor sólida */
  color: var(--snow); 
  position: relative;
  z-index: 0; /* Coloque o HeroSection atrás de outros elementos se necessário */
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
  z-index: 1;
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
  flex-wrap: wrap;
  gap: 0.5rem; /* Espaço entre as palavras */
  z-index: 1; /* Garante que o título fique acima dos outros elementos */
  position: relative; /* Garante que ele fique no topo */
  color: var(--white); /* Ajuste para um título mais visível */
  
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
    'que é apaixonada por tecnologia e na possibilidade de impactar positivamente o dia a dia das pessoas.',
  ];
  useEffect(() => {
    // Código para inicializar o particles.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    script.onload = () => {
      // Inicialização do particles.js
      window.particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 50,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3.3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 100,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
        });
    };
    document.body.appendChild(script);
    
    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <HeroSection id="Home">
      <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%' }}></div>
      <CodeBlock>
        {`// Olá!
// Meu nome é Fernanda Gabrielli
// Sou desenvolvedora Full Stack React/Python
// Deixa eu te falar mais sobre mim?`}
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
