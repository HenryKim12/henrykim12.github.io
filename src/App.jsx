import React from 'react'
import routes from './router/routes'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import NavBar from './components/navbar/NavBar'
import Experience from './pages/experience/Experience'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.experience} element={<Experience />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
