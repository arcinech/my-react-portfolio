import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="custom-nav" variant="dark" className={styles.root}>
      <Container>
      <Navbar.Brand as={Link} to='/'>arcinech's Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/projects'>My projects</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Button href="https://github.com/arcinech" variant="info">Github</Button>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;