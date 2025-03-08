// src/components/Projects.js

const Projects = ({ projects }) => {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-4">Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-md">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Voir le projet
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
