import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaJs, FaReact, FaGitAlt, FaDocker, FaPython } from 'react-icons/fa';
import { SiStyledcomponents, SiRedux, SiGulp, SiJest, SiCypress, SiDjango, SiTypescript, SiSqlalchemy, SiMicrosoftsqlserver, SiMysql, SiGrunt } from 'react-icons/si';
import ProfileImage from '../../assets/myself.jpg'; 

const AboutMeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background-color: var(--grey);
  color: white;
  border-radius: 10px;
  max-width: 1200px;
  margin: 40px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding-right: 20px;

  h1 {
    color: var(--pink);
    font-size: 36px;
    margin-bottom: 20px;
    text-indent: 50px; /* Adiciona um recuo maior ao título */
  }

  p {
    font-size: 17px;
    line-height: 1.5;
  }

  span {
    color: var(--purple);
    font-weight: bold;
  }
`;

const Skills = styled.div`
  margin-top: 20px;

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: var(--pink);
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 15px;
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    color: white;
    font-weight: bold;
    font-size: 14px;

    svg {
      font-size: 24px;
      color: var(--pink);
      transition: transform 0.3s ease-in-out; /* Suaviza o efeito */

      &:hover {
        transform: scale(2); /* Ajusta o tamanho do zoom */
      }
    }
  }
`;

const SkillBar = styled.div`
  display: flex;
  gap: 5px;

  span {
    width: 10px;
    height: 10px;
    background-color: var(--purple);
    border-radius: 50%;
    opacity: 0.4;

    &.active {
      opacity: 1;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid var(--purple);
    transition: transform 0.5s ease; 

    &:hover {
      transform: scale(1.5); 
    }
  }
`;

const AboutMe: React.FC = () => {
  const renderSkillBar = (level: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < level ? 'active' : ''}></span>
    ));
  };

  return (
    <AboutMeContainer>
      <TextContainer>
        <h1>Quem</h1>
            <p>
      Pensar em mim é indispensável citar que sempre fui movida pela curiosidade e pela vontade constante de aprender. Ao longo da minha jornada, sempre valorizei o crescimento pessoal e profissional. Uma das experiências mais marcantes foram meus trabalhos voluntários com jovens, onde tive a oportunidade de incentivá-los a transformar suas vidas e buscar novas perspectivas.
      <br />
      Atualmente sou graduanda na Residência Tecnológica em Análise e Desenvolvimento de Sistemas e me dedico ao desenvolvimento com Python e React, sempre buscando aplicar meu aprendizado para criar soluções que façam a diferença na vida das pessoas. Acredito que a tecnologia tem um enorme poder de transformação, e é isso que me motiva a continuar crescendo.
          </p>
        <Skills>
          <h3>Skills</h3>
          <ul>
            <li>
              <FaHtml5 />
              HTML
              <SkillBar>{renderSkillBar(5)}</SkillBar>
            </li>
            <li>
              <FaCss3Alt />
              CSS
              <SkillBar>{renderSkillBar(5)}</SkillBar>
            </li>
            <li>
              <FaBootstrap />
              Bootstrap
              <SkillBar>{renderSkillBar(5)}</SkillBar>
            </li>
            <li>
              <FaSass />
              SASS
              <SkillBar>{renderSkillBar(4)}</SkillBar>
            </li>
            <li>
              <FaJs />
              JavaScript
              <SkillBar>{renderSkillBar(5)}</SkillBar>
            </li>
            <li>
              <FaReact />
              React.js
              <SkillBar>{renderSkillBar(5)}</SkillBar>
            </li>
            <li style={{fontSize: '11px' }}>
              <SiStyledcomponents style={{fontSize: '30px' }}/>
              Styled Components
              <SkillBar>{renderSkillBar(5)}</SkillBar>
            </li>
            <li>
              <FaGitAlt />
              GitHub / Gitlab
              <SkillBar>{renderSkillBar(5)}</SkillBar>
            </li>
            <li>
              <SiTypescript />
              TypeScript
              <SkillBar>{renderSkillBar(4)}</SkillBar>
            </li>
            <li>
              <SiRedux />
              Redux
              <SkillBar>{renderSkillBar(4)}</SkillBar>
            </li>
            <li>
              <SiGulp />
              Gulp
              <SkillBar>{renderSkillBar(3)}</SkillBar>
            </li>
            <li>
              <SiGrunt />
             Grunt
              <SkillBar>{renderSkillBar(3)}</SkillBar>
            </li>
            <li>
              <SiJest />
              Jest
              <SkillBar>{renderSkillBar(3)}</SkillBar>
            </li>
            <li>
              <SiCypress />
              Cypress
              <SkillBar>{renderSkillBar(3)}</SkillBar>
            </li>
            <li>
              <FaPython />
              Python
              <SkillBar>{renderSkillBar(4)}</SkillBar>
            </li>
            <li>
              <FaDocker />
              Docker
              <SkillBar>{renderSkillBar(4)}</SkillBar>
            </li>
            <li>
              <SiDjango />
              Django
              <SkillBar>{renderSkillBar(3)}</SkillBar>
            </li>
            <li>
              <SiMysql />
              MySql
              <SkillBar>{renderSkillBar(1)}</SkillBar>
            </li>
          </ul>
        </Skills>
      </TextContainer>
      <ImageContainer>
        <img src={ProfileImage} alt="Profile" />
      </ImageContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;
