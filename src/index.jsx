import React from 'react'
import ReactDOM from 'react-dom/client'

import App from 'components/App'
import PortalRoot from 'components/Portal'

import 'assets/styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <PortalRoot />
    <App />
  </React.StrictMode>
)
