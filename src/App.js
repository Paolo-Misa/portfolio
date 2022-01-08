
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router} from 'react-router-dom'
import { Routes ,Route } from 'react-router-dom';

import './App.css';
//components
import AppNavbar from './components/AppNavbar';

//Pages
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Projects from './pages/Projects'




function App() {
  return (
    <Router>
      <AppNavbar/>
      <Container className='m-0 p-0 b-0' expand="lg">
          <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route  path='/login' element={<Login/>}/>
            <Route  path='/contact' element={<Contact/>}/>
            <Route  path='/profile' element={<Profile/>}/>
            <Route  path='/projects' element={<Projects/>}/>
           
            <Route path="*" element={<Home/>} />
          </Routes>
      </Container>
    </Router>
  );
}

export default App;
