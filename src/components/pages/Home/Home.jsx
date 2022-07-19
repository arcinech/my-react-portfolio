import About from '../../features/About/About';
import TechIcons from '../../common/TechIcons/TechIcons';
import {faHtml5, faCss3, faJsSquare, faReact, faNodeJs} from '@fortawesome/free-brands-svg-icons';

const Home = () => {

  const icons = [{icon: faHtml5, name: 'HTML5'}, {icon: faCss3, name: 'CSS3'}, {icon: faJsSquare, name: 'JavaScript'}, {icon: faReact, name: 'React'}, {icon: faNodeJs, name: 'NodeJS'}];

  return (
    <section>
      <h3>My Portfolio</h3>
      <About />
      <TechIcons icons={icons}/>
    </section>
  )
};

export default Home;