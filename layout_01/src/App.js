import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Container from './components/layout/Container';

import Home from './components/pages/Home';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/pagina 2' element={<Page2 />} />
          <Route exact path='/pagina 3' element={<Page3 />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
