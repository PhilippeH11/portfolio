// src/components/Experience.js

const Experience = ({ experiences }) => {
  return (
    <section className="experience">
      <h2>Expérience Professionnelle</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title}</h3>
          <p className="company">{exp.company}</p>
          <p className="dates">{exp.dates}</p>
          <ul>
            {exp.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
