// components/Footer.tsx
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-20 backdrop-blur-md rounded-t-3xl text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl mb-2">Stay Connected!</h2>
        <p className="mb-6">Follow me on social media</p>
        
        <div className="flex justify-center space-x-6 mb-4">
          
          <a href="https://x.com/DYalamaddi?t=Jk4SMXccc2wDtfB_9rX-lw&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400" aria-label="Twitter">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.instagram.com/_devendra.y_/profilecard/?igsh=ZXNhM290bnRnbHBs" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400" aria-label="Instagram">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.linkedin.com/in/devendra-yalamaddi-737852211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600" aria-label="LinkedIn">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/Devyalamaddi" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="GitHub">
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
