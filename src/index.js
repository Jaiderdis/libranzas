import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './utils/darkMode'
import App from './App'
import { AuthProvider } from './Context/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <React.StrictMode>

    <AuthProvider>
      <BrowserRouter>

        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>

      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>

)
