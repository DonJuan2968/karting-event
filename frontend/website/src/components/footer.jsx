// import module
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


// import css
import './head-fo.css'


const Footer = () => {
    return (
      <footer className="footer">
        <div className="center">
        <div className="footer-container">
          <div className="footer-links">
            <h3>Pages</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/inschrijven">Inschrijven</Link></li>
              <li><Link to="/teams">Teams</Link></li>
              <li><HashLink to="/#Contact">Contact</HashLink></li>
            </ul>
          </div>
  
          <div className="footer-socials">
            <h3>Volg Ons</h3>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareXTwitter} /></a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareInstagram} /></a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 KartToernooi. All rights reserved.</p>
        </div>
      </div>
      </footer>
    );
};


export default Footer