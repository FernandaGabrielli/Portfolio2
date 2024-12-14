import React, { useState } from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

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
    padding: 30px 20px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  margin-right: 20px;

  h1 {
    color: var(--pink);
    font-size: 36px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const ContactLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  a {
    color: var(--pink);
    font-size: 50px;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: var(--purple);
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 15px;
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

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 12px;
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

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 12px;
    }
  }
`;

const Contact: React.FC = () => {
  const { t } = useTranslation();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('subject', formData.subject);
    data.append('message', formData.message);

    try {
      const response = await fetch('https://formspree.io/f/xeoqwrvz', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: data,
      });

      if (response.ok) {
        alert('✅');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('❌⚠️');
      }
      } catch (error) {
        console.error('Erro no envio:', error);
        alert('❌⚠️');
      }      
  };

  return (
    <ContactContainer id="contact">
      <TextContainer>
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.description')}</p>
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
            placeholder={t('contact.form.name')}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t('contact.form.email')}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder={t('contact.form.subject')}
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder={t('contact.form.message')}
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
          />
          <button type="submit">{t('contact.viewMessage')}</button>
        </form>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
