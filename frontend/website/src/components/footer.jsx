// import module
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
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