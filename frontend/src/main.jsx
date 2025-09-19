// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './bugsnag.js'

import { BrowserRouter } from "react-router-dom"
import StoreContextProvider from './Context/StoreContext.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </ErrorBoundary>
)
