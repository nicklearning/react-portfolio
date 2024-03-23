import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer w-100 mt-auto p-4">
      <div className="container text-center mb-5">
        <a href="https://github.com/nicklearning" target="_blank" rel="noopener noreferrer" >
          <FontAwesomeIcon icon={faGithub} size="2x" className='mx-5'/>
        </a>
        <a href="https://www.linkedin.com/in/nick-smith-862630113/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;