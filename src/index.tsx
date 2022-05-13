import React from 'react'
import ReactDOM from 'react-dom/client'
import * as Provider from './common/providers'
import './index.css'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <Provider.Client>
      <Provider.Theme>
        <Provider.Router />
      </Provider.Theme>
    </Provider.Client>
  </React.StrictMode>,
)

reportWebVitals(console.info)
