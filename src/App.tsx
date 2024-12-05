// src/App.tsx
import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import Hero from "./components/Hero/Hero.tsx";
import GlobalStyle from "./styles/GlobalStyle.ts";

import ProjectsSection from "./components/ProjectsSection/ProjectsSection.tsx";
import Header from "./components/Header/Header.tsx";


const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
    <div className="App">
      <Header />
      <Hero />
      <AboutMe />
      <ProjectsSection />
    </div>
    </>
  );
};
export default App;
