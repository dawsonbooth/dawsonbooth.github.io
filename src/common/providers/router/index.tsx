import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import routes from './routes'

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {Object.values(routes).map(route => (
        <Route key={route.name} path={route.path} element={route.element} />
      ))}
    </Routes>
  </BrowserRouter>
)

export default Router
