import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';


function App() {
  

  return (
    <div className='App'>
        <Router>
          <Navigation/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/experience' element={<Experience/>}></Route>
          </Routes>
        </Router>

        <Footer/>
    </div>
  )
}

export default App
