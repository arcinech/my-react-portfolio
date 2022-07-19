import Button from 'react-bootstrap/Button';
import styles from './About.module.scss';

const About = () => {
  const linkURL = 'https://images.pexels.com/photos/11769686/pexels-photo-11769686.jpeg?cs=srgb&dl=pexels-yuliia-tretynychenko-11769686.jpg&fm=jpg&w=640&h=960'
  return (
    <div className={styles.root}>
      <h3>About me</h3>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={linkURL} alt ='me' />
        </div>
        <div>
          <h4>Hi, I'm Marcin Lech</h4>
          <p>I'm mostly frontend developer with skills centered around REACT library.</p>
          <p>I started my journey with more serious programing from FullStack bootcamp.</p>
          <p>I'm currently working on my own projects and I'm looking for new challenges.</p>
          <p>I know my way around using expressJS library for backend with MongoDB connection</p> 
        </div>
        <ul>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>React Library</li>
          <li>Redux with React</li>
          <li>ExpresJS</li>
          <li>MongoDb</li>
        </ul>
        <div>
          <Button variant="info" href="https://github.com/arcinech" target="_blanc">My github</Button>
        </div>
      </div>
    </div>
  )
}

export default About;