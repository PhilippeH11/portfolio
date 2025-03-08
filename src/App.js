// src/App.js
import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { HelmetProvider, Helmet } from "react-helmet-async";

const App = () => {
  const experiences = [
    {
      title: "Webmaster & Référenceur SEO",
      company: "Freelance",
      dates: "2019 - Présent",
      details: [
        "Conception, développement, référencement SEO, webdesign.",
        "Clients : Carcashotes, Club Catalan de Course de Lévriers, Barbiscotto.",
      ],
    },
    // ... autres expériences
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Node.js",
    "Tailwind CSS",
    // ... autres compétences
  ];

  const projects = [
    {
      title: "Carcashotes",
      description: "Site web pour chambres d'hôtes.",
      link: "https://www.carcas-hote.com/",
    },
    // ... autres projets
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Philippe Harchouche - Développeur Web et Formateur Informatique à
          Carcassonne
        </title>
        <meta
          name="description"
          content="Développeur web et formateur informatique à Carcassonne. Création de sites web, gestion de parcs informatiques, formations personnalisées. Contactez-moi pour vos projets !"
        />
      </Helmet>
      <div className="container">
        <div className="photo-header">
          <img
            src="/images/profil.jpg"
            alt="Philippe Harchouche - développeur web et formateur informatique"
            className="photo"
          />
        </div>
        <About />
        <Experience experiences={experiences} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
