import ProjectCard from '../../common/ProjectCard/ProjectCard';
import styles from './ProjectsList.module.scss';

const ProjectList = () => {
  const projects = [
    { 
      id:"1",
      name: 'name',
      demo: '#',
      github: '#'
    },
    { 
      id:"2",
      name: 'name',
      demo: '#',
      github: '#'
    },
    { 
      id:"3",
      name: 'name',
      demo: '#',
      github: '#'
    },
    { 
      id:"4",
      name: 'name',
      demo: '#',
      github: '#'
    },
  ];

  return (
    <div className={`container ${styles.root}`}>
      <h2>My Projects</h2>
      <div className='row'>
        {projects.map(item => {
          return (
            <div key={item.id} className="col-6">
              <ProjectCard  {...item}/>
            </div>
          );
        })}
      </div>
    </div>
  )

}

export default ProjectList;