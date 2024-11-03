// components/Footer.tsx
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-20 backdrop-blur-md rounded-t-3xl text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl mb-2">Stay Connected!</h2>
        <p className="mb-6">Follow us on social media</p>
        
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500" aria-label="Facebook">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400" aria-label="Twitter">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400" aria-label="Instagram">
            <FaInstagram size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600" aria-label="LinkedIn">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="GitHub">
            <FaGithub size={30} />
          </a>
        </div>

        <div className="text-sm mb-2">
          <p>👩‍💻 Crafted with love and ☕ by Devendra</p>
        </div>

        <p className="text-xs">
          © {new Date().getFullYear()} Dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
