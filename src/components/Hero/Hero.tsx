import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';

const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
  background-color: var(--dark);
  color: var(--snow);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    padding: 40px 20px;
  }
`;

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const CodeBlock = styled.pre`
  font-family: 'Fira Code', monospace;
  color: var(--snow);
  background-color: #282a36;
  padding: 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  white-space: pre-wrap;
  max-width: 40%;
  z-index: 2;

  @media (max-width: 768px) {
    max-width: 90%;
    font-size: 1rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 40%;
  z-index: 2;
  position: relative; 
  
  @media (max-width: 768px) {
    max-width: 90%;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 6rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  z-index: 2;
  position: relative;
  color: var(--white);
  margin: 0;
  flex-grow: 0;
  flex-shrink: 0;
  line-height: 1.1;

  span {
    &:first-child {
      color: var(--oldpink);
    }
    &:last-child {
      color: var(--oldpurple);
    }
  }

  @media (max-width: 768px) {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #50fa7b;
  margin: 0;
  flex-grow: 0;
  flex-shrink: 0;
  line-height: 1.2;

  span {
    color: #ff79c6;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

const TypewriterWrapper = styled.div`
  margin-top: 1rem;
`;


const Hero: React.FC = () => {
  const [particlesJS, setParticlesJS] = useState<any>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    script.onload = () => {
      const particles = window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            }
          },
          opacity: {
            value: 0.5,
            random: false
          },
          size: {
            value: 2,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 3.3
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: true,
              mode: "push"
            }
          }
        },
        retina_detect: true
      });
      setParticlesJS(particles);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const { t } = useTranslation();

  const phrases = t('hero.phrases', { returnObjects: true }) as string[];

  const disableParticlesInteraction = () => {
    if (particlesJS) {
      particlesJS.particles.interactivity.events.onclick.enable = false;
      particlesJS.particles.interactivity.events.onhover.enable = false;
    }
  };

  const enableParticlesInteraction = () => {
    if (particlesJS) {
      particlesJS.particles.interactivity.events.onclick.enable = true;
      particlesJS.particles.interactivity.events.onhover.enable = true;
    }
  };

  return (
    <HeroSection id="Home">
      <ParticlesContainer id="particles-js" />
      <CodeBlock>{t('hero.code')}</CodeBlock>
      <TextWrapper onMouseEnter={disableParticlesInteraction} onMouseLeave={enableParticlesInteraction}>
        <Title>{t('hero.title')}</Title>
        <TypewriterWrapper>
          <Subtitle>
            {t('hero.subtitle')}
            <span>
              <Typewriter
                words={phrases}
                loop
                cursor={true}
                delay={50}
                deleteSpeed={50}
                typeSpeed={100}
                cursorStyle='|' 
              />
            </span>
          </Subtitle>
        </TypewriterWrapper>
      </TextWrapper>
    </HeroSection>
  );
};

export default Hero;