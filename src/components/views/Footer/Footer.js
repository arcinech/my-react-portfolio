import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2022 Marcin Lech</p>
          </div>
          <div className="col-md-6 text-right ms-auto links-footer">
            <ul className="list-inline text-right">
              <li className="list-inline-item">
                <a href="
                https://www.linkedin.com/in/marcin-lech-2a4658243/
                " target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="list-inline-item"> 
                <a href="https://www.github.com/arcinech" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );

};

export default Footer;