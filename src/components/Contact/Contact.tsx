import React, { useState } from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importa os ícones

const ContactContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
  margin-right: 20px;

  h1 {
    color: var(--pink);
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  gap: 20px; /* Espaçamento entre os ícones */
  margin-top: 20px;
  

  a {
    color: var(--pink);
    font-size: 50px; /* Ajusta o tamanho do ícone */
    transition: color 0.3s ease-in-out;

    &:hover {
      color: var(--purple);
    }
  }
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin-top: 20px;

  input,
  textarea {
    margin-bottom: 10px;
    padding: 15px;
    font-size: 16px;
    border: 1px solid var(--purple);
    border-radius: 5px;
    background-color: var(--grey);
    color: white;
    width: 100%;
    resize: none;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: var(--pink);
      outline: none;
    }
  }

  button {
    padding: 10px;
    font-size: 18px;
    color: white;
    background-color: var(--pink);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--purple);
    }
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <ContactContainer>
      <TextContainer>
        <h1>Onde me encontrar!</h1>
        <span>Será um prazer conversar com você! </span> 
        <span>Estou disponível nessas redes:</span>
        <ContactLinks>
          <a href="https://www.linkedin.com/in/fernandagabrielli" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/fernandagabrielli" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </ContactLinks>
      </TextContainer>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Assunto"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Sua Mensagem"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
          />
          <button type="submit">Enviar mensagem</button>
        </form>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
