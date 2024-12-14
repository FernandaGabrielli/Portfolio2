import React, { useState } from 'react';
import styled from 'styled-components';
import GabsxImage from '../../assets/GabsX.png';
import GabsxGif from '../../assets/GabsX.gif';
import EfoodImage from '../../assets/efood.png';
import EplayImage from '../../assets/eplay.png';
import EfoodGif from '../../assets/efood.gif';  
import EplayGif from '../../assets/eplay.gif'; 
import { useTranslation } from 'react-i18next';

const ProjectsContainer = styled.section`
  background-color: var(--dark); 
  color: #fff;
  padding: 40px 50px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
  h2 {
    margin-top: 40px;
    font-size: 2rem;
    color: var(--snow); 
    span {
      color: var(--oldpink); 
    }
  }

  a {
    color: var(--oldpurple); 
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s;

    &:hover {
      color: var(--oldpink); 
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    h2 {
      font-size: 1.5rem;
    }
    a {
      font-size: 1rem;
    }
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const ProjectCard = styled.div`
  background-color: var(--darkblue); 
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  div {
    padding: 15px;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 5px;
      color: var(--oldpurple); 
    }

    p {
      font-size: 0.9rem;
      color: #b3b3b3;
      margin-bottom: 10px;
    }

    span {
      font-size: 0.8rem;
      background: var(--pink); 
      color: var(--grey); 
      padding: 3px 6px;
      border-radius: 5px;
      margin-right: 5px;
    }

    .tech-and-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 10px;
    }

    .technologies {
      display: flex;
      flex-wrap: wrap;
    }

    .info {
      display: flex;
      justify-content: flex-start;
      gap: 10px;
    }

    .deploy, .repository {
      background: var(--oldpurple);
      color: #fff;
      padding: 5px 10px;
      border-radius: 20px;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background-color 0.3s;
      text-decoration: none;

      &:hover {
        background: var(--oldpink);
      }
    }

    .repository {
      background: var(--snow);
      color: var(--oldpurple);

      &:hover {
        background: var(--oldpink);
        color: #fff;
      }
    }
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    div {
      padding: 10px;
    }

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.8rem;
    }

    .deploy, .repository {
      font-size: 0.8rem;
    }
  }
`;

interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  gif: string;  
  deployLink: string;
  repositoryLink: string;
}

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      name: t('projects.project1.name'),
      description: t('projects.project1.description'),
      technologies: ['BootStrap', 'Django', 'Python'],
      image: GabsxImage,  
      gif: GabsxGif,  
      deployLink: 'https://fgabs.pythonanywhere.com/',
      repositoryLink: 'https://github.com/FernandaGabrielli/GabsX',
    },
    {
      name: t('projects.project2.name'),
      description: t('projects.project2.description'),
      technologies: ['TypeScript', 'React', 'Jest'],
      image: EfoodImage,  
      gif: EfoodGif,  
      deployLink: 'https://efoodreact.vercel.app/',
      repositoryLink: 'https://github.com/FernandaGabrielli/efoodreact',
    },
    {
      name: t('projects.project3.name'),
      description: t('projects.project3.description'),
      technologies: ['TypeScript', 'React', 'Styled-Components'],
      image: EplayImage,  
      gif: EplayGif,  
      deployLink: 'https://eplay-lime.vercel.app/',
      repositoryLink: 'https://github.com/FernandaGabrielli/Eplay',
    },
  ];

  return (
    <ProjectsContainer id="ProjectsSection">
      <Header>
        <h2>
          {t('projects.title')}
        </h2>
        <a href="https://github.com/FernandaGabrielli">{t('projects.viewAll')} &gt;</a>
      </Header>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={hoveredIndex === index ? project.gif : project.image}  
              alt={`${project.name} screenshot`}
            />
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tech-and-info">
                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="info">
                  <a href={project.deployLink} className="deploy" target="_blank" rel="noopener noreferrer">Deploy</a>
                  <a href={project.repositoryLink} className="repository" target="_blank" rel="noopener noreferrer">Repositório</a>
                </div>
              </div>
            </div>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
