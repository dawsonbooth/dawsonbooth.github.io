import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import './index.css'
import Projects from './projects'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

reportWebVitals(console.info)
