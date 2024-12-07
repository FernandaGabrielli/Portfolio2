import React from 'react';
import styled from 'styled-components';
import GabsxImage from '../../assets/GabsX.png';
import EfoodImage from '../../assets/efood.png';
import EplayImage from '../../assets/eplay.png';

const ProjectsContainer = styled.section`
  background-color: var(--dark); 
  color: #fff;
  padding: 40px 50px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
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
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background-color: var(--darkblue); 
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  
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
      flex-wrap: wrap; /* Permite que a linha seja quebrada se necessário */
      margin-top: 10px;
    }

    .technologies {
      display: flex;
      flex-wrap: wrap;
    }

    .info {
      display: flex;
      justify-content: flex-start;
      gap: 10px; /* Espaçamento entre os botões */
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
    transform: scale(1.05);
  }
`;

interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  deployLink: string;
  repositoryLink: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      name: 'GabsX',
      description: 'Projeto inspirado no Twitter, utilizado para praticar conhecimentos em Django',
      technologies: ['BootStrap', 'Django', 'Python'],
      image: GabsxImage,
      deployLink: 'https://fgabs.pythonanywhere.com/',
      repositoryLink: 'https://github.com/FernandaGabrielli/GabsX',
    },
    {
      name: 'Efood',
      description: 'Projeto delivery restaurante funcional utilizado como estudo de React e testes',
      technologies: ['TypeScript', 'React', 'Jest'],
      image: EfoodImage,
      deployLink: 'https://efoodreact.vercel.app/',
      repositoryLink: 'https://github.com/FernandaGabrielli/efoodreact',
    },
    {
      name: 'Eplay',
      description: 'Projeto marketplace de games',
      technologies: ['TypeScript', 'React', 'Styled-Components'],
      image: EplayImage,
      deployLink: 'https://eplay-lime.vercel.app/',
      repositoryLink: 'https://github.com/FernandaGabrielli/Eplay',
    },
  ];

  return (
    <ProjectsContainer>
      <Header>
        <h2>
          Melhores <span>Projetos</span>
        </h2>
        <a href="https://github.com/FernandaGabrielli">Acesse todos os meus projetos &gt;</a>
      </Header>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <img src={project.image} alt={`${project.name} screenshot`} />
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
