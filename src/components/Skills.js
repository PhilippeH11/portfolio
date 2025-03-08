// src/components/Skills.js

const Skills = ({ skills }) => {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-4">Compétences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
