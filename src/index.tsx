import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Layout from '@/common/components/layout'
import * as Provider from '@/common/providers'
import routes from '@/common/routes'
import '@/index.css'
import reportWebVitals from '@/reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <Provider.Client>
      <Provider.Theme>
        <BrowserRouter>
          <Layout>
            <Routes>
              {Object.values(routes).map(route => (
                <Route key={route.name} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider.Theme>
    </Provider.Client>
  </React.StrictMode>,
)

reportWebVitals(console.info)
