import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import Hero from "./components/Hero/Hero.tsx";
import GlobalStyle from "./styles/GlobalStyle.ts";

import ProjectsSection from "./components/ProjectsSection/ProjectsSection.tsx";
import Header from "./components/Header/Header.tsx";
import Contact from "./components/Contact/Contact.tsx";


const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
    <div className="App">
      <Header />
      <Hero />
      <AboutMe />
      <ProjectsSection />
      <Contact />
    </div>
    </>
  );
};
export default App;
