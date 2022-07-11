import Container from 'react-bootstrap/Container';
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/views/Header/Header';
import Home from "./components/pages/Home/Home";
import Projects from './components/pages/Projects/Projects';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
