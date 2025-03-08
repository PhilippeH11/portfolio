// src/components/Footer.js

const Footer = () => {
  return (
    <footer className="py-4 text-center">
      <div className="flex justify-center space-x-4 mb-2">
        <a
          href="[Votre lien GitHub]"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          GitHub
        </a>
        <a
          href="[Votre lien LinkedIn]"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          LinkedIn
        </a>
      </div>
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Philippe Harchouche
      </p>
    </footer>
  );
};

export default Footer;
