import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './TechIcons.module.scss';

const TechIcons = ({icons}) => {

  const selectedStyle = (name) => {
    if (name.toLowerCase() === 'react') {
      return styles.react;
    }
    if (name.toLowerCase() === 'redux') {
      return styles.react;
    }
    if (name.toLowerCase() === 'express') {
      return styles.express;
    }
    if (name.toLowerCase() === 'mongodb') {
      return styles.mongodb;
    }
    if (name.toLowerCase() === 'html5') {
      return styles.html;
    }
    if (name.toLowerCase() === 'javascript') {
      return styles.js;
    }
    if (name.toLowerCase() === 'css3') {
      return styles.css3;
    }
    if (name.toLowerCase() === 'nodejs') {
      return styles.nodejs;
    }
    return undefined;
  };

  if(!icons) return null;
  return (
    <div className={styles.root}>
      <h5>My technology stack</h5>
      <div>
        <div className={styles.icons}>
        {icons.map(({icon, name},i) => {
          const style = selectedStyle(name);
          return(
          <FontAwesomeIcon key={i} icon={icon} title={name} className={style} />
          )}
        )}
      </div>
      </div>
    </div>
  )
};

export default TechIcons;