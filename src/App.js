
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router} from 'react-router-dom'
import { Routes ,Route } from 'react-router-dom';

import './App.css';
//components
import AppNavbar from './components/AppNavbar';

//Pages
import Home from './pages/Home'




function App() {
  return (
    <Router>
      <AppNavbar/>
      <Container className='m-0 p-0 b-0' expand="lg">
          <Routes>
            <Route  path='/' element={<Home/>}/>
           
            <Route path="*" element={<Home/>} />
          </Routes>
      </Container>
    </Router>
  );
}

export default App;
