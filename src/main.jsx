import React from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { CookiesProvider } from 'react-cookie';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <Router>
        <App />
      </Router>
    </CookiesProvider>
  </React.StrictMode>,
)
