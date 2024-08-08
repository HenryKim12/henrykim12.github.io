import React from 'react'
import routes from './router/routes'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
