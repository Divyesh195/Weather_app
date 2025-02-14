import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.jsx'
import Weather from './weather.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Weather />
  </StrictMode>,
)
