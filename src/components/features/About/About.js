import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact, faHtml5, faJsSquare, faCss3, faNodeJs} from '@fortawesome/free-brands-svg-icons';
import styles from './About.module.scss';
const About = () => {

  return (
    <div>
      <h3>About me</h3>
      <div>
        <div>Content</div>
        <ul>
          <li>HTML</li>
          <li>JavaScript</li>
          <li><FontAwesomeIcon icon={faReact} /> React Framework</li>
          <li>Redux with React</li>
        </ul>
        <Button variant="danger" href="https://github.com/arcinech">My github</Button>
      </div>
      <div>My technology stack</div>
      <div className={styles.icons}>
      <FontAwesomeIcon icon={faHtml5} title="HTML5" />
      <FontAwesomeIcon icon={faCss3} title="CSS3"/>
      <FontAwesomeIcon icon={faJsSquare} title="JavaScript"/>
      <FontAwesomeIcon icon={faReact} title="React"/>
      <FontAwesomeIcon icon={faNodeJs} title="NodeJS"/>
      </div>
    </div>
  )
}

export default About;