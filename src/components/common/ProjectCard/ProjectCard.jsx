import Button from 'react-bootstrap/Button'
import styles from './ProjectCard.module.scss';

const ProjectCard = ({id, name, github, demo}) => {
  return (
    <div key={id} className={styles.root}>
      <div>{name}</div>
      <div className={styles.info}>
        {/* <img src='#' alt={name}/> */}
        <div className={styles.buttons}>
          <Button variant="danger" href="demo" target="_blank">DEMO</Button>
          <Button variant="info" href="github" target="_blank">GITHUB</Button>
        </div>
      </div>
    </div>
  )
};

export default ProjectCard;