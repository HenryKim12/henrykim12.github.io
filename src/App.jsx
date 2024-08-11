import React from 'react'
import routes from './router/routes'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import NavBar from './components/navbar/NavBar'
import Experience from './pages/experience/Experience'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import "./App.css"

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.experience} element={<Experience />} />
          <Route path={routes.projects} element={<Projects />} />
          <Route path={routes.contact} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
