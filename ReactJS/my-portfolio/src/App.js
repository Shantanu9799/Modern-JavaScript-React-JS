import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router';
import  Home  from './routes/Home';
import  Project  from './routes/Project';
import  About  from './routes/About';
import  Contact  from './routes/Contact';
import Certificates from './routes/Certificates';
import Achievements from './routes/Achievements';

function App() {
  return (
    <>
    <Routes>

      <Route path='/' element={ <Home /> } />
      <Route path='/project' element={ <Project /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/contact' element={ <Contact /> } />
      <Route path='/certificate' element={ <Certificates /> } />
      <Route path='/achievement' element={ <Achievements /> } />
    
    </Routes>
    </>
  );
}

export default App;
